import{g as k}from"./commonjsHelpers.BosuxZz1.js";function _(x,v){for(var t=0;t<v.length;t++){const l=v[t];if(typeof l!="string"&&!Array.isArray(l)){for(const h in l)if(h!=="default"&&!(h in x)){const m=Object.getOwnPropertyDescriptor(l,h);m&&Object.defineProperty(x,h,m.get?m:{enumerable:!0,get:()=>l[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(x,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,l,h){var m=t("../lib/oop"),f=t("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},r.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};m.inherits(r,f),r.getTagRule=function(i){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(i){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:i}},r.getEndRule=function(i){return{token:"comment.doc",regex:"\\*\\/",next:i}},l.DocCommentHighlightRules=r}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,l,h){var m=t("../lib/oop"),f=t("./doc_comment_highlight_rules").DocCommentHighlightRules,r=t("./text_highlight_rules").TextHighlightRules,i=l.cFunctions="hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",e=function(n){var o="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",a="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",c="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",g="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",d="NULL|true|false|TRUE|FALSE|nullptr",s=this.$keywords=this.createKeywordMapper(Object.assign({"keyword.control":o,"storage.type":a,"storage.modifier":c,"keyword.operator":g,"variable.language":"this","constant.language":d,"support.function.C99.c":i},n),"identifier"),p=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,u="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},f.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+p+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:p},{token:"constant.language.escape",regex:u},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:s,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(f,"doc-",[f.getEndRule("start")]),this.normalizeRules()};m.inherits(e,r),l.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,l,h){var m=t("../range").Range,f=function(){};(function(){this.checkOutdent=function(r,i){return/^\s+$/.test(r)?/^\s*\}/.test(i):!1},this.autoOutdent=function(r,i){var e=r.getLine(i),n=e.match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,a=r.findMatchingBracket({row:i,column:o});if(!a||a.row==i)return 0;var c=this.$getIndent(r.getLine(a.row));r.replace(new m(i,0,i,o-1),c)},this.$getIndent=function(r){return r.match(/^\s*/)[0]}}).call(f.prototype),l.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,l,h){var m=t("../../lib/oop"),f=t("../../range").Range,r=t("./fold_mode").FoldMode,i=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};m.inherits(i,r),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,o){var a=e.getLine(o);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var c=this._getFoldWidgetBase(e,n,o);return!c&&this.startRegionRe.test(a)?"start":c},this.getFoldWidgetRange=function(e,n,o,a){var c=e.getLine(o);if(this.startRegionRe.test(c))return this.getCommentRegionBlock(e,c,o);var s=c.match(this.foldingStartMarker);if(s){var g=s.index;if(s[1])return this.openingBracketBlock(e,s[1],o,g);var d=e.getCommentFoldRange(o,g+s[0].length,1);return d&&!d.isMultiLine()&&(a?d=this.getSectionRange(e,o):n!="all"&&(d=null)),d}if(n!=="markbegin"){var s=c.match(this.foldingStopMarker);if(s){var g=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],o,g):e.getCommentFoldRange(o,g,-1)}}},this.getSectionRange=function(e,n){var o=e.getLine(n),a=o.search(/\S/),c=n,g=o.length;n=n+1;for(var d=n,s=e.getLength();++n<s;){o=e.getLine(n);var p=o.search(/\S/);if(p!==-1){if(a>p)break;var u=this.getFoldWidgetRange(e,"all",n);if(u){if(u.start.row<=c)break;if(u.isMultiLine())n=u.end.row;else if(a==p)break}d=n}}return new f(c,g,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,n,o){for(var a=n.search(/\s*$/),c=e.getLength(),g=o,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++o<c;){n=e.getLine(o);var p=d.exec(n);if(p&&(p[1]?s--:s++,!s))break}var u=o;if(u>g)return new f(g,a,u,n.length)}}).call(i.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(t,l,h){var m=t("../lib/oop"),f=t("./text").Mode,r=t("./c_cpp_highlight_rules").c_cppHighlightRules,i=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=r,this.$outdent=new i,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};m.inherits(n,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(o,a,c){var g=this.$getIndent(a),d=this.getTokenizer().getLineTokens(a,o),s=d.tokens,p=d.state;if(s.length&&s[s.length-1].type=="comment")return g;if(o=="start"){var u=a.match(/^.*[\{\(\[]\s*$/);u&&(g+=c)}else if(o=="doc-start"){if(p=="start")return"";var u=a.match(/^\s*(\/?)\*/);u&&(u[1]&&(g+=" "),g+="* ")}return g},this.checkOutdent=function(o,a,c){return this.$outdent.checkOutdent(a,c)},this.autoOutdent=function(o,a,c){this.$outdent.autoOutdent(a,c)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}).call(n.prototype),l.Mode=n}),ace.define("ace/mode/protobuf_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,l,h){var m=t("../lib/oop"),f=t("./text_highlight_rules").TextHighlightRules,r=function(){var i="double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes",e="message|required|optional|repeated|package|import|option|enum",n=this.createKeywordMapper({"keyword.declaration.protobuf":e,"support.type":i},"identifier");this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant",regex:"<[^>]+>"},{regex:"=",token:"keyword.operator.assignment.protobuf"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};m.inherits(r,f),l.ProtobufHighlightRules=r}),ace.define("ace/mode/protobuf",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/protobuf_highlight_rules","ace/mode/folding/cstyle"],function(t,l,h){var m=t("../lib/oop"),f=t("./c_cpp").Mode,r=t("./protobuf_highlight_rules").ProtobufHighlightRules,i=t("./folding/cstyle").FoldMode,e=function(){f.call(this),this.foldingRules=new i,this.HighlightRules=r};m.inherits(e,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/protobuf"}).call(e.prototype),l.Mode=e}),function(){ace.require(["ace/mode/protobuf"],function(t){x&&(x.exports=t)})}()})(b);var w=b.exports;const y=k(w),M=_({__proto__:null,default:y},[w]);export{M as m};
