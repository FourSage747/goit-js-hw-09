function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const r=t.currentTarget.delay,n=t.currentTarget.step;let o,i=t.currentTarget.amount.value,l=1,a=Number(r.value);o=setInterval((()=>{(function(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))})(l,a).then((t=>{e(u).Notify.success(t,{timeout:4e3})})).catch((t=>{e(u).Notify.failure(t,{timeout:4e3})})),l+=1,i-=1,a+=Number(n.value),i||clearInterval(o)}),1e3)}));
//# sourceMappingURL=03-promises.b5a5b8c4.js.map
