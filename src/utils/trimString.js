export const trimString = (string, length) => {
    if(string?.length>length ) {
        
        const trimmedName = string.substring(0, length);
        return `${trimmedName}...`
      } else {
          return string
      }
}