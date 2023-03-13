
export function Occupation({ occupation }) {
  if(occupation === 1) {
    return <p>Você somente</p>;
  }else if(occupation === 2) {
    return <p>Você e mais 1</p>;
  }else {
    return <p>Você e mais 2</p>;
  }
}
