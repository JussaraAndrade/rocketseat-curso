## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` 

```css
    div {
        /* shorthand */

        /* 12px: top / 16px: right / 10px: bottom / 4px: left */
        padding: 12px 16px 10px 4px;

        /* 12px: top / 16px: left e right / 0: bottom */
        padding: 12px 16px 0;

        /* 8px: top e bottom / 16px: left e right  */
        padding: 8px 16px;

        /* um único valor para todas as laterais */
        padding: 8px;
    }
```
    * Padding poderá causar diferença na largura de um elemento


    https://developer.mozilla.org/en-US/docs/Web/CSS/padding