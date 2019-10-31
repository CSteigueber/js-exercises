var films=[`Hors Normes`,`The Mustang`,`Joker`,`Downtown Abbey`,`Parasite`,`La Ragazzo Nella Nebbia`, 
`Once upon a time ... in Hollywood`,`Au Nom De La Terre`,`ITZHAK`, `Everest: De Jonge Yeti`, `Minuscule 2: het tropische avontuur`,
`De Leeuwenkoning`];


//const toLower = (content) => content = content.toLowerCase();
const wrapWithTag = (content, tag)=> `<${tag}>${content}</${tag}>`;
films= films.map(film => film.toLowerCase());
films= films.map(film => wrapWithTag(film,`li`));
document.write(wrapWithTag(films.join(``),`ul`));