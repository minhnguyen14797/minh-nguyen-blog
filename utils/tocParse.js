

export function tocParse(tocdata) {
    let dataList = [];
    tocdata.forEach((d) => {
        dataList.push({
          tag: d.localName, 
          title: d.innerText ? d.innerText : d.title, 
          link:d.children[0].name
        })
      })

    return dataList
}