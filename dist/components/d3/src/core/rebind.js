function d3_rebind(e,t,n){return function(){var r=n.apply(t,arguments);return arguments.length?e:r}}d3.rebind=function(e,t){var n=1,r=arguments.length,i;while(++n<r)e[i=arguments[n]]=d3_rebind(e,t,t[i]);return e}