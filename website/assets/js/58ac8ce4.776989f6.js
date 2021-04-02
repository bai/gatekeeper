(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(99)),o={id:"debug",title:"Debugging"},l={unversionedId:"debug",id:"debug",isDocsHomePage:!1,title:"Debugging",description:"NOTE: Verbose logging with DEBUG level can be turned on with --log-level=DEBUG.  By default, the --log-level flag is set to minimum log level INFO. Acceptable values for minimum log level are [DEBUG, INFO, WARNING, ERROR]. In production, this flag should not be set to DEBUG.",source:"@site/docs/debug.md",slug:"/debug",permalink:"/gatekeeper/website/docs/debug",editUrl:"https://open-policy-agent.github.io/gatekeeper/website/docs/docs/debug.md",version:"current",sidebar:"docs",previous:{title:"Metrics",permalink:"/gatekeeper/website/docs/metrics"},next:{title:"Emergency Recovery",permalink:"/gatekeeper/website/docs/emergency"}},c=[{value:"Viewing the Request Object",id:"viewing-the-request-object",children:[]},{value:"Tracing",id:"tracing",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: Verbose logging with DEBUG level can be turned on with ",Object(i.b)("inlineCode",{parentName:"p"},"--log-level=DEBUG"),".  By default, the ",Object(i.b)("inlineCode",{parentName:"p"},"--log-level")," flag is set to minimum log level ",Object(i.b)("inlineCode",{parentName:"p"},"INFO"),". Acceptable values for minimum log level are ","[",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG"),", ",Object(i.b)("inlineCode",{parentName:"p"},"INFO"),", ",Object(i.b)("inlineCode",{parentName:"p"},"WARNING"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR"),"]",". In production, this flag should not be set to ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG"),".")),Object(i.b)("h2",{id:"viewing-the-request-object"},"Viewing the Request Object"),Object(i.b)("p",null,"A simple way to view the request object is to use a constraint/template that\ndenies all requests and outputs the request object as its rejection message."),Object(i.b)("p",null,"Example template:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdenyall\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDenyAll\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdenyall\n\n        violation[{"msg": msg}] {\n          msg := sprintf("REVIEW OBJECT: %v", [input.review])\n        }\n')),Object(i.b)("p",null,"Example constraint:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDenyAll\nmetadata:\n  name: deny-all-namespaces\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n')),Object(i.b)("h2",{id:"tracing"},"Tracing"),Object(i.b)("p",null,"In debugging decisions and constraints, a few pieces of information can be helpful:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cached data and existing rules at the time of the request"),Object(i.b)("li",{parentName:"ul"},"A trace of the evaluation"),Object(i.b)("li",{parentName:"ul"},"The input document being evaluated")),Object(i.b)("p",null,"Writing out this information for every request would be very expensive, and it would be hard\nto find the relevant logs for a given request. Instead, Gatekeeper allows users to specify\nresources and requesting users for which information will be logged. They can do so by\nconfiguring the ",Object(i.b)("inlineCode",{parentName:"p"},"Config")," resource, which lives in the ",Object(i.b)("inlineCode",{parentName:"p"},"gatekeeper-system")," namespace."),Object(i.b)("p",null,"Below is an example of a config resource:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  # Data to be replicated into OPA\n  sync:\n    syncOnly:\n      - group: ""\n        version: "v1"\n        kind: "Namespace"\n  validation:\n    # Requests for which we want to run traces\n    traces:\n        # The requesting user for which traces will be run\n      - user: "user_to_trace@company.com"\n        kind:\n          # The group, version, kind for which we want to run a trace\n          group: ""\n          version: "v1"\n          kind: "Namespace"\n          # If dump is defined and set to `All`, also dump the state of OPA\n          dump: "All"\n')),Object(i.b)("p",null,"Traces will be written to the stdout logs of the Gatekeeper controller."),Object(i.b)("p",null,"If there is an error in the Rego in the ConstraintTemplate, there are cases where it is still created via ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl apply -f [CONSTRAINT_TEMPLATE_FILENAME].yaml"),"."),Object(i.b)("p",null,"When applying the constraint using ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl apply -f constraint.yaml")," with a ConstraintTemplate that contains incorrect Rego, and error will occur: ",Object(i.b)("inlineCode",{parentName:"p"},'error: unable to recognize "[CONSTRAINT_FILENAME].yaml": no matches for kind "[NAME_OF_CONSTRAINT]" in version "constraints.gatekeeper.sh/v1beta1"'),"."),Object(i.b)("p",null,"To find the error, run ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl get -f [CONSTRAINT_TEMPLATE_FILENAME].yaml -o yaml"),". Build errors are shown in the ",Object(i.b)("inlineCode",{parentName:"p"},"status")," field."))}p.isMDXComponent=!0},99:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);