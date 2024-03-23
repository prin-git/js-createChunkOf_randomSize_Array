const range = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

const fn = (arr) => {
  let parent = [];
  let size = range(1, 7);
  console.log("r", size);
  for (let i = 0; i < arr.length; i++) {
    let child = parent[parent.length - 1];

    if (!child || child.length === size) {
      parent.push([arr[i]]);
    } else child.push(arr[i]);
  }

  console.log(parent);
};

fn([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5, 6, 7, 8, 92, 3, 4, 45, 3]);
