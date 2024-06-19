function getPropertySafely(obj, property) {
    try {
      return obj[property];
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Ошибка TypeError: невозможно получить доступ к свойству на неопределенном объекте.");
        return undefined;
      } else {
        throw error;
      }
    }
  }
  
  const myObj = { name: "John", age: 30 };
  
  console.log(getPropertySafely(myObj, "name")); 
  console.log(getPropertySafely(myObj, "address"));
  let undefinedObj;
  console.log(getPropertySafely(undefinedObj, "name"));
  