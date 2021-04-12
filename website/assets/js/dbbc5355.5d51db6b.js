(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||i;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(100)),o={id:"howto",title:"How to use Gatekeeper"},s={unversionedId:"howto",id:"howto",isDocsHomePage:!1,title:"How to use Gatekeeper",description:"Gatekeeper uses the OPA Constraint Framework to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage.",source:"@site/docs/howto.md",slug:"/howto",permalink:"/gatekeeper/website/docs/howto",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/howto.md",version:"current",sidebar:"docs",previous:{title:"Examples",permalink:"/gatekeeper/website/docs/examples"},next:{title:"Audit",permalink:"/gatekeeper/website/docs/audit"}},c=[{value:"Constraint Templates",id:"constraint-templates",children:[]},{value:"Constraints",id:"constraints",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gatekeeper uses the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/open-policy-agent/frameworks/tree/master/constraint"},"OPA Constraint Framework")," to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage."),Object(i.b)("h2",{id:"constraint-templates"},"Constraint Templates"),Object(i.b)("p",null,"Before you can define a constraint, you must first define a ",Object(i.b)("inlineCode",{parentName:"p"},"ConstraintTemplate"),", which describes both the ",Object(i.b)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/#rego"},"Rego")," that enforces the constraint and the schema of the constraint. The schema of the constraint allows an admin to fine-tune the behavior of a constraint, much like arguments to a function."),Object(i.b)("p",null,"Here is an example constraint template that requires all labels described by the constraint to be present:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n  name: k8srequiredlabels\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sRequiredLabels\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          properties:\n            labels:\n              type: array\n              items: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8srequiredlabels\n\n        violation[{"msg": msg, "details": {"missing_labels": missing}}] {\n          provided := {label | input.review.object.metadata.labels[label]}\n          required := {label | label := input.parameters.labels[_]}\n          missing := required - provided\n          count(missing) > 0\n          msg := sprintf("you must provide labels: %v", [missing])\n        }\n')),Object(i.b)("p",null,"You can install this ConstraintTemplate with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/demo/basic/templates/k8srequiredlabels_template.yaml\n")),Object(i.b)("h2",{id:"constraints"},"Constraints"),Object(i.b)("p",null,"Constraints are then used to inform Gatekeeper that the admin wants a ConstraintTemplate to be enforced, and how. This constraint uses the ",Object(i.b)("inlineCode",{parentName:"p"},"K8sRequiredLabels")," constraint template above to make sure the ",Object(i.b)("inlineCode",{parentName:"p"},"gatekeeper")," label is defined on all namespaces:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\n')),Object(i.b)("p",null,"You can install this Constraint with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/demo/basic/constraints/all_ns_must_have_gatekeeper.yaml\n")),Object(i.b)("p",null,"Note the ",Object(i.b)("inlineCode",{parentName:"p"},"match")," field, which defines the scope of objects to which a given constraint will be applied. It supports the following matchers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"kinds")," accepts a list of objects with ",Object(i.b)("inlineCode",{parentName:"li"},"apiGroups")," and ",Object(i.b)("inlineCode",{parentName:"li"},"kinds")," fields that list the groups/kinds of objects to which the constraint will apply. If multiple groups/kinds objects are specified, only one match is needed for the resource to be in scope."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scope")," accepts ",Object(i.b)("inlineCode",{parentName:"li"},"*"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Cluster"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"Namespaced")," which determines if cluster-scoped and/or namesapced-scoped resources are selected. (defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"*"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"namespaces")," is a list of namespace names. If defined, a constraint will only apply to resources in a listed namespace."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"excludedNamespaces")," is a list of namespace names. If defined, a constraint will only apply to resources not in a listed namespace."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"labelSelector")," is a standard Kubernetes label selector."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"namespaceSelector")," is a standard Kubernetes namespace selector. If defined, make sure to add ",Object(i.b)("inlineCode",{parentName:"li"},"Namespaces")," to your ",Object(i.b)("inlineCode",{parentName:"li"},"configs.config.gatekeeper.sh")," object to ensure namespaces are synced into OPA. Refer to the ",Object(i.b)("a",{parentName:"li",href:"/gatekeeper/website/docs/sync"},"Replicating Data section")," for more details.")),Object(i.b)("p",null,"Note that if multiple matchers are specified, a resource must satisfy each top-level matcher (",Object(i.b)("inlineCode",{parentName:"p"},"kinds"),", ",Object(i.b)("inlineCode",{parentName:"p"},"namespaces"),", etc.) to be in scope. Each top-level matcher has its own semantics for what qualifies as a match. An empty matcher is deemed to be inclusive (matches everything). Also understand ",Object(i.b)("inlineCode",{parentName:"p"},"namespaces"),", ",Object(i.b)("inlineCode",{parentName:"p"},"excludedNamespaces"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"namespaceSelector")," will match on cluster scoped resources which are not namespaced. To avoid this adjust the ",Object(i.b)("inlineCode",{parentName:"p"},"scope")," to ",Object(i.b)("inlineCode",{parentName:"p"},"Namespaced"),"."))}p.isMDXComponent=!0}}]);