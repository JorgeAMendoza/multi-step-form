const convertToTitleCase = (str: string) => {
  const titleCase = str.replace(/([A-Z])/g, ' $1')
  const titleCaseResult = titleCase.charAt(0).toUpperCase() + titleCase.slice(1)
  return titleCaseResult
}

export default convertToTitleCase
