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

## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que é irmão direto na hierarquia

```css
    h1 + p {
        color: red;
    }
```

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```css
    h1 ~ p {
        color: red;
    }
```



