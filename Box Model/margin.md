## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
    div {
        /* shorthand */
        margin: 12px 16px 10px 4px;
        
        /* 12px: top / 16px: right e left / 0: bottom */
        margin: 12px 16px 0;

        /*8px: top e bottom / 16px: right e left */
        margin: 8px 16px;
        
        /*um único valor para todas as laterais*/
        margin: 8px;
    }
```

    * Cuidado com margin collapsing (top se ajunta ao bottom)

