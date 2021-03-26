# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de
aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2{
    color: red;
}
```

## Child combinator

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li {
    color: blue;
}
```


