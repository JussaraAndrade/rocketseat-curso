# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem
considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra !important

* cuidado, evie o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata

<!--
HTML:

<h1 class="title" id="my-title">Título <strong>alo</strong> </h1>
<p >paragrafo</p>

CSS:

#my-title,
#my-title strong{
  color: gray;
}

.title{
  color: red;
}

h1{
  /*Sobrescreve - coloca por cima de outra cor*/
 color: blue !important;
}

*{
  color: green;
}


-->