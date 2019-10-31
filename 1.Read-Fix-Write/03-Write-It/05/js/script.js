const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];
var combo=[]

const wrapWithTag = (content, tag="li") => `<${tag}>${content.title} :${content.price}</${tag}>`;
const wrapMultiTag = (cont1,cont2,tag="li") => `<${tag}>${cont1.title} with ${cont2.title} :${cont1.price+cont2.price}</${tag}>`;
console.table(fees);

var wrappedFees= fees.map(fee => wrapWithTag(fee));
console.log(wrappedFees);
//console.log(list);
document.write("<ul>",wrappedFees.join(" "),"</ul>");
for (let i=0; i<3; i++){
 combo[i]=wrapMultiTag(fees[i],extras[i]);
}
console.log(combo)
document.write("<ul>",combo.join(" "),"</ul>");