// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

// Progression 2: add 3 variables: title, currIndex, check
function createPop() {
  const title = document.createElement('h3');
  document.body.appendChild(title);
  let currIndex = NEG_INF;
  let check = false;
  // Progression 3: create a function "find" (inside createPop function only).
  function find(item) {
    if (item in arrayOfNumbers) {
      currIndex = arrayOfNumbers.indexOf(item);
      check = true;
    }
    return [currIndex, check];
  }
  // Progression 4: return a function (can be anonymous).
  var result = function () {
    [currIndex, check] = find(itemToSearch);
    if (check) {
      title.innerText = `The item is present and is at index ${currIndex}`;
    } else {
      title.innerText = `The item is not present and is at index ${currIndex}`;
    }
  };
  return result();
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 9;
createPop();
