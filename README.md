# jQuery-Plugins
Somewhere to stash jQuery plugins that I have shizzled together

## jquery.smoothScroll.js
Creates a lovely buttery smooth scrolling effect on your website.
No dependencies other than jQuery, and it couldn't be simpler to use; just wrap the entire site in an element and then call the constructor on it.

You can optionally decorate your element with two `data-` attributes to affect the behaviour.

e.g.

```html
<body>
  <div class="somediv" data-duration="1.2" data-timing-function="cubic-bezier(0.25, 0.85, 0.5, 1)">
    Your content
  </div>
</body>
```


```javascript
<script>
  $('.somediv').smoothScroll();
</script>
```
---
