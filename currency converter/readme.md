Project- Currency Converter<br>
Author- Aashish Raj Singh<br>

#### URL:
    `https://delicate-entremet-71fcc5.netlify.app/`

#### Key Learnings:
    -Always fetch all data once cause if u fetch it one by one on a loop, it can make the website very laggy.
    - ?. is used to safely search for an object or a property so that if it is not found it does'nt throw an error.
    - let userName = obj?.name || "Guest"; this || ensures that if there is no name in obj, userName is Guest.
    -An async function always returns a promise.
    -To access a local .json file fetch like an api but with fetch('file.json').
    -for..in loops are great for objects.
    -To fetch an api
        async function name(param) {
              let response = await fetch('');
              let data = await response.json();
        }
    -When mixing sync and async code make sure events like DOMContentLoaded doesn't use data from an async function,
      if they do then make them await while async datas load.
    
