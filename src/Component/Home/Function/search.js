export const search =(item, value)=>{
    const specialCharacters = ["é","à","Ë","ê","â","è"]
    const upperCaseCompanyName =  item.stockName.toUpperCase().includes(value.toUpperCase().trim())
    const lowerCaseCompanyName = item.companyName.toLowerCase().includes(value.toLowerCase().trim())
    const lowerCaseStock =  item.stockName.toLowerCase().includes(value.toLowerCase().trim())
    const upperCaseStock =  item.stockName.toUpperCase().includes(value.toUpperCase().trim())
    const strWithAccent = item.stockName.includes(specialCharacters.forEach((item)=>item.toLowerCase()||item.toUpperCase()))
    const findStockName = lowerCaseStock || upperCaseStock
    const findCompanyName = upperCaseCompanyName || lowerCaseCompanyName
    return {strWithAccent, findStockName, findCompanyName}
  }

  