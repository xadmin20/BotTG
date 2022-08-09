function insertAfter (referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function escapeRegExp (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll (str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function showTopContent() {
  let mdeStyled = document.getElementById('mde-styled');
  mdeStyled.style.opacity = '1';
  mdeStyled.style.height = 'auto';
}

function parseMd(md) {
  md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
  md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
    return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
  });
  md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  return md;
}

document.addEventListener('DOMContentLoaded', () => {
  const T1 = '<T1>',
    T1html = '&lt;T1&gt;',
    T1htmlBr = '&lt;T1&gt;<br>',
    T2 = '<T2>', T2htmlBR = '&lt;T2&gt;<br>', T2html = '&lt;T2&gt;',
    T3 = '<T3>',
    T3html = '&lt;T3&gt;',
    T3htmlBr = '&lt;T3&gt;<br>',
    TBR = '<TBR>',
    VID = '<VID>',
    T4 = '<T4>',
    TBL = '<TBL>'

  /* for /app/assets/javascripts/admin/active_admin.js.coffee /app/views/components/gb__learning/student/_lesson.html.slim */
  const mdeStyled = document.getElementById('mde-styled')
  if(mdeStyled) {

    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });

    let mdeImages = document.querySelectorAll('#mde-styled img');
    for (let i = 0; i < mdeImages.length; ++i) {
      const PNG = '.png'
      const altText = document.createElement('p')
      const imgWidth = mdeImages[i].clientWidth
      const imgSrc = mdeImages[i].src
      if(imgSrc.includes(PNG)) {
        mdeImages[i].className = 'border-grey'
      }
      altText.innerHTML = mdeImages[i].alt;
      altText.className = "mde-text-center";
      altText.style.maxWidth = imgWidth + 'px';
      mdeImages[i].parentNode.insertBefore(altText, mdeImages[i].nextSibling);
    }

    let mdeParagraphs = document.querySelectorAll('#mde-styled p');
    for (let j = 0; j < mdeParagraphs.length; ++j) {

      const innerText = mdeParagraphs[j].innerText
      /**
       * Инфо-блок с итоговой инфой <T1>
       * */
      if (innerText.includes(T1)) {
        let banner = null
        let newTag = document.createElement('p')
        let html = mdeParagraphs[j].innerHTML
        let text = mdeParagraphs[j].innerText
        let linkImg = ''
        let imgTag = ''
        let link = text.match(new RegExp(/\|(.*?)\|/, "gi"))
        html = html.replace(/\|(.*?)\|/gi, '');
        if (Array.isArray(link)) {
          linkImg = link[0].replaceAll('|', '')
          imgTag = `<img class="mde-image-right" src="${linkImg}">`
        }
        html = replaceAll(html, T1, '')
        html = replaceAll(html, T1htmlBr, '')
        html = replaceAll(html, T1html, '')
        banner ? newTag.appendChild(banner) : null
        newTag.className = 'mde-text-1'
        newTag.innerHTML = imgTag + parseMd(html)
        mdeParagraphs[j].parentNode.insertBefore(newTag, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }
      /**
       * Акцентный инфо-блок <T2>
       * */
      if (innerText.includes(T2)) {
        let newTag = document.createElement('p')
        let html = mdeParagraphs[j].innerHTML
        html = replaceAll(html, T2, '')
        html = replaceAll(html, T2htmlBR, '')
        html = replaceAll(html, T2html, '')
        newTag.className = 'mde-text-2'
        newTag.innerHTML = parseMd(html)
        mdeParagraphs[j].parentNode.insertBefore(newTag, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }
      /**
       * Сноска с цитатой <T3>
       * */
      if (innerText.includes(T3)) {
        let newTag = document.createElement('p')
        let html = mdeParagraphs[j].innerHTML
        let text = mdeParagraphs[j].innerText
        let quouteTxt = ''
        let quoute = text.match(new RegExp(/\=(.*?)\=/, "gi"))
        if(Array.isArray(quoute)) {
          quouteTxt = quoute[0].replaceAll('=', '')
        }
        html = html.replace(/\=(.*?)\=/gi, '');
        newTag.setAttribute('data-after', quouteTxt);
        html = replaceAll(html, T3, '')
        html = replaceAll(html, T3htmlBr, '')
        html = replaceAll(html, T3html, '')
        newTag.className = 'mde-text-3'
        newTag.innerHTML = parseMd(html)
        mdeParagraphs[j].parentNode.insertBefore(newTag, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }
      /**
       * Code and image
       * T4
       * */
      if (innerText.includes(T4)) {
        let newP = document.createElement('pre')
        let html = mdeParagraphs[j].innerHTML
        console.log(mdeParagraphs[j])
        newP.className = 'mde-text-4 sql hljs language-sql'
        newP.innerHTML = html
        newP.setAttribute('data-after', 'https://hb.bizmrg.com/frontend-scripts/unique-hf/example_code_1.png');
        mdeParagraphs[j].parentNode.insertBefore(newP, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }
      /**
       * Новая строка TBR
       * */
      if (innerText.includes(TBR)) {
        let newTag = document.createElement('p')
        let text = mdeParagraphs[j].innerText
        text = replaceAll(text, TBR, '<br/>')
        newTag.innerHTML = text
        mdeParagraphs[j].parentNode.insertBefore(newTag, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }
      /**
       * Video element tag
       * */
      if (innerText.includes(VID)) {
        let newTag = document.createElement('p')
        let text = mdeParagraphs[j].innerText
        text = text.replace(/\=-(.*?)\-=\((.*?)\)/gi, '<iframe width="888" height="498" src="$1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        newTag.className = 'mde-video'
        newTag.innerHTML = replaceAll(text, VID, '')
        mdeParagraphs[j].parentNode.insertBefore(newTag, mdeParagraphs[j].nextSibling)
        mdeParagraphs[j].remove()
      }

      /**
       * Table parser
       * */
      if (innerText.includes(TBL)) {}
    }
    showTopContent()
  }
});
