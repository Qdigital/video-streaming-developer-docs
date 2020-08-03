(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{DDn6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var b=n("7ljp"),c=n("XbGe"),i=n("Drr0");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}var a={},r={_frontmatter:a},m=c.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,b,c={},i=Object.keys(e);for(b=0;b<i.length;b++)n=i[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(b.b)(m,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Input for a network interface of an ECDN server."),Object(b.b)(i.k,{mdxType:"GQLCodeSnippet"},Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.d,{mdxType:"GQLKeyword"},"type")," InterfaceInput ",Object(b.b)(i.h,{mdxType:"GQLOpen"})),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Name of network interface (ie. eth0, eth1, ens36, etc...).")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Currently it must be eth0 (multiple interfaces aren't supported yet).")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.g,{mdxType:"GQLName"},"name"),"(): ",Object(b.b)(i.f,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String"),Object(b.b)(i.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Configuration mode of interface's network address.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.g,{mdxType:"GQLName"},"networkConfigurationMode"),"(): ",Object(b.b)(i.f,{href:"/ecdn-api-enums/NetworkConfigurationMode",mdxType:"GQLLink"},"NetworkConfigurationMode"),Object(b.b)(i.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Local IP of interface.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Omit if network configuration mode is DYNAMIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Required if network configuration mode is STATIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.g,{mdxType:"GQLName"},"localIP"),"(): ",Object(b.b)(i.f,{href:"/ecdn-api-scalars/IPv4",mdxType:"GQLLink"},"IPv4")),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Netmask of interface's local network")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Omit if network configuration mode is DYNAMIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Required if network configuration mode is STATIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.g,{mdxType:"GQLName"},"netmask"),"(): ",Object(b.b)(i.f,{href:"/ecdn-api-scalars/IPv4Mask",mdxType:"GQLLink"},"IPv4Mask")),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Gateway of interface's local network.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Omit if network configuration mode is DYNAMIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.c,{mdxType:"GQLComment"},"# Required if network configuration mode is STATIC.")),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.j,{mdxType:"GQLTab"}),Object(b.b)(i.g,{mdxType:"GQLName"},"gateway"),"(): ",Object(b.b)(i.f,{href:"/ecdn-api-scalars/IPv4",mdxType:"GQLLink"},"IPv4")),Object(b.b)(i.e,{mdxType:"GQLLine"}," "),Object(b.b)(i.e,{mdxType:"GQLLine"},Object(b.b)(i.b,{mdxType:"GQLClose"}))),Object(b.b)("h2",null,"Fields"),Object(b.b)("h3",null,"name: ",Object(b.b)("a",o({parentName:"h3"},{href:"/ecdn-api-scalars/String"}),"String"),"!"),Object(b.b)("p",null,"Name of network interface (ie. eth0, eth1, ens36, etc…).\nCurrently it must be eth0 (multiple interfaces aren’t supported yet)."),Object(b.b)("h3",null,"networkConfigurationMode: ",Object(b.b)("a",o({parentName:"h3"},{href:"/ecdn-api-enums/NetworkConfigurationMode"}),"NetworkConfigurationMode"),"!"),Object(b.b)("p",null,"Configuration mode of interface’s network address."),Object(b.b)("h3",null,"localIP: ",Object(b.b)("a",o({parentName:"h3"},{href:"/ecdn-api-scalars/IPv4"}),"IPv4")),Object(b.b)("p",null,"Local IP of interface.\nOmit if network configuration mode is DYNAMIC.\nRequired if network configuration mode is STATIC."),Object(b.b)("h3",null,"netmask: ",Object(b.b)("a",o({parentName:"h3"},{href:"/ecdn-api-scalars/IPv4Mask"}),"IPv4Mask")),Object(b.b)("p",null,"Netmask of interface’s local network\nOmit if network configuration mode is DYNAMIC.\nRequired if network configuration mode is STATIC."),Object(b.b)("h3",null,"gateway: ",Object(b.b)("a",o({parentName:"h3"},{href:"/ecdn-api-scalars/IPv4"}),"IPv4")),Object(b.b)("p",null,"Gateway of interface’s local network.\nOmit if network configuration mode is DYNAMIC.\nRequired if network configuration mode is STATIC."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-input-objects-interface-input-mdx-faa01f047c0eb4b5dc7e.js.map