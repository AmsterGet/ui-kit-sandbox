## **Button**

Min width - 120px. Max width - flexible.

### Props:

- **type**: _string_, optional, default = "button"
- **disabled**: _bool_, optional, default = false
- **variant**: _string_, optional, default = "primary"
- **wide**: _bool_, optional, default = false
- **icon**: _string(imported svg icon)_, optional, default = ""
- **iconPlace**: _string('start' | 'end')_, optional, default = ""
- **children**: _node_, optional, default= ""
- **customClassName**: _string_, optional, default= ""
- **dataAutomationId**: _string_, optional, default = ''

### Events:

- **onClick**

### Variants

The Button comes with variants: _primary_ (default), _ghost_, _danger_ and _text_.  

### Icon

Only text variant can be used with icon. You can pass imported svg icon via _icon_ prop.
_iconPlace_ prop control displaying it on the left or right respectively.
