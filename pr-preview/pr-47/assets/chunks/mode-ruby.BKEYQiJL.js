import{g as I}from"./commonjsHelpers.BosuxZz1.js";function N(A,T){for(var c=0;c<T.length;c++){const u=T[c];if(typeof u!="string"&&!Array.isArray(u)){for(const b in u)if(b!=="default"&&!(b in A)){const x=Object.getOwnPropertyDescriptor(u,b);x&&Object.defineProperty(A,b,x.get?x:{enumerable:!0,get:()=>u[b]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var L={exports:{}};(function(A,T){ace.define("ace/mode/ruby_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,u,b){var x=c("../lib/oop"),y=c("./text_highlight_rules").TextHighlightRules,f=u.constantOtherSymbol={token:"constant.other.symbol.ruby",regex:"[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"};u.qString={token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},u.qqString={token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},u.tString={token:"string",regex:"[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"};var p=u.constantNumericHex={token:"constant.numeric",regex:"0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"},w=u.constantNumericBinary={token:"constant.numeric",regex:/\b(0[bB][01](?:[01]|_(?=[01]))*)\b/},l=u.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/},k=u.constantNumericOctal={token:"constant.numeric",regex:/\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/},s=u.constantNumericRational={token:"constant.numeric",regex:/\b([\d]+(?:[./][\d]+)?ri?)\b/},o=u.constantNumericComplex={token:"constant.numeric",regex:/\b([\d]i)\b/},n=u.constantNumericFloat={token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b"},r=u.instanceVariable={token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},i=function(){var _="abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method",m="alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend",g="true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION",R="$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self",M=this.$keywords=this.createKeywordMapper({keyword:m,"constant.language":g,"variable.language":R,"support.function":_,"invalid.deprecated":"debugger"},"identifier"),S=`\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae'"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})`,v={"(":")","[":"]","{":"}","<":">","^":"^","|":"|","%":"%"};this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"comment.multiline",regex:"^=begin(?=$|\\s.*$)",next:"comment"},{token:"string.regexp",regex:/[/](?=.*\/)/,next:"regex"},[{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(")/,push:[{token:"constant.language.escape",regex:S},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:S},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(')/,push:[{token:"constant.language.escape",regex:/\\['\\]/},{token:"string.end",regex:/'/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/%[qwx]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var h=t[t.length-1];return e.unshift(h,a),this.next="qStateWithoutInterpolation",this.token}},{token:"string.start",regex:/%[QWX]?([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var h=t[t.length-1];return e.unshift(h,a),this.next="qStateWithInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[si]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var h=t[t.length-1];return e.unshift(h,a),this.next="sStateWithoutInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[SI]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var h=t[t.length-1];return e.unshift(h,a),this.next="sStateWithInterpolation",this.token}},{token:"string.regexp",regex:/%[r]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var h=t[t.length-1];return e.unshift(h,a),this.next="rState",this.token}}],{token:"punctuation",regex:"::"},r,{token:"variable.global",regex:"[$][a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]*"},{token:["punctuation.operator","support.function"],regex:/(\.)([a-zA-Z_\d]+)(?=\()/},{token:["punctuation.operator","identifier"],regex:/(\.)([a-zA-Z_][a-zA-Z_\d]*)/},{token:"string.character",regex:"\\B\\?(?:"+S+"|\\S)"},{token:"punctuation.operator",regex:/\?(?=.+:)/},s,o,f,p,n,w,l,k,{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:M,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(t,a,e){var h=t[2]=="-"||t[2]=="~"?"indentedHeredoc":"heredoc",d=t.split(this.splitRegex);return e.push(h,d[3]),[{type:"constant",value:d[1]},{type:"string",value:d[2]},{type:"support.class",value:d[3]},{type:"string",value:d[4]}]},regex:"(<<[-~]?)(['\"`]?)([\\w]+)(['\"`]?)",rules:{heredoc:[{onMatch:function(t,a,e){return t===e[1]?(e.shift(),e.shift(),this.next=e[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^ +"},{onMatch:function(t,a,e){return t===e[1]?(e.shift(),e.shift(),this.next=e[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(t,a){return a[0]==="heredoc"||a[0]==="indentedHeredoc"?a[0]:t}},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]",onMatch:function(t,a,e){return this.next="",t=="}"&&e.length>1&&e[1]!="start"&&(e.shift(),this.next=e.shift()),this.token}},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:/[?:,;.]/}],comment:[{token:"comment.multiline",regex:"^=end(?=$|\\s.*$)",next:"start"},{token:"comment",regex:".+"}],qStateWithInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"string"}},{token:"constant.language.escape",regex:S},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===v[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],qStateWithoutInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"string"}},{token:"constant.language.escape",regex:/\\['\\]/},{token:"constant.language.escape",regex:/\\./},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===v[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],sStateWithoutInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.other.symbol.ruby"}},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===v[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],sStateWithInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.other.symbol.ruby"}},{token:"constant.language.escape",regex:S},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===v[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],rState:[{token:"string.regexp",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.language.escape"}},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.regexp",regex:/\//},{token:"string.regexp",regex:/[)\]>}^|%][imxouesn]*/,onMatch:function(t,a,e){return e.length&&t[0]===v[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.language.escape")}},{include:"regex"},{defaultToken:"string.regexp"}],regex:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"constant.language.escape",regex:/\\[AGbBzZ]/},{token:"constant.language.escape",regex:/\\g<[a-zA-Z0-9]*>/},{token:["constant.language.escape","regexp.keyword","constant.language.escape"],regex:/(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/},{token:["constant.language.escape","invalid","constant.language.escape"],regex:/(\\p{\^?)([^/]*)(})/},{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:/[/][imxouesn]*/,next:"start"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"regexp.keyword",regex:/\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/},{token:"constant.language.escape",regex:/\[\^?/,push:"regex_character_class"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:/&?&?\[\^?/,push:"regex_character_class"},{token:"constant.language.escape",regex:"]",next:"pop"},{token:"constant.language.escape",regex:"-"},{defaultToken:"string.regexp.characterclass"}]},this.normalizeRules()};x.inherits(i,y),u.RubyHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,u,b){var x=c("../range").Range,y=function(){};(function(){this.checkOutdent=function(f,p){return/^\s+$/.test(f)?/^\s*\}/.test(p):!1},this.autoOutdent=function(f,p){var w=f.getLine(p),l=w.match(/^(\s*\})/);if(!l)return 0;var k=l[1].length,s=f.findMatchingBracket({row:p,column:k});if(!s||s.row==p)return 0;var o=this.$getIndent(f.getLine(s.row));f.replace(new x(p,0,p,k-1),o)},this.$getIndent=function(f){return f.match(/^\s*/)[0]}}).call(y.prototype),u.MatchingBraceOutdent=y}),ace.define("ace/mode/folding/ruby",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(c,u,b){var x=c("../../lib/oop"),y=c("./fold_mode").FoldMode,f=c("../../range").Range,p=c("../../token_iterator").TokenIterator,w=u.FoldMode=function(){};x.inherits(w,y),(function(){this.indentKeywords={class:1,def:1,module:1,do:1,unless:1,if:1,while:1,for:1,until:1,begin:1,else:0,elsif:0,rescue:0,ensure:0,when:0,end:-1,case:1,"=begin":1,"=end":-1},this.foldingStartMarker=/(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/,this.foldingStopMarker=/(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/,this.getFoldWidget=function(l,k,s){var o=l.getLine(s),n=this.foldingStartMarker.test(o),r=this.foldingStopMarker.test(o);if(n&&!r){var i=o.match(this.foldingStartMarker);if(i[1]){if((i[1]=="if"||i[1]=="else"||i[1]=="while"||i[1]=="until"||i[1]=="unless")&&(i[1]=="else"&&/^\s*else\s*$/.test(o)===!1||/^\s*(?:if|else|while|until|unless)\s*/.test(o)===!1)||i[1]=="when"&&/\sthen\s/.test(o)===!0)return;if(l.getTokenAt(s,i.index+2).type==="keyword")return"start"}else if(i[3]){if(l.getTokenAt(s,i.index+1).type==="comment.multiline")return"start"}else return"start"}if(k!="markbeginend"||!r||n&&r)return"";var i=o.match(this.foldingStopMarker);if(i[3]==="end"){if(l.getTokenAt(s,i.index+1).type==="keyword")return"end"}else if(i[1]){if(l.getTokenAt(s,i.index+1).type==="comment.multiline")return"end"}else return"end"},this.getFoldWidgetRange=function(l,k,s){var o=l.doc.getLine(s),n=this.foldingStartMarker.exec(o);if(n)return n[1]||n[3]?this.rubyBlock(l,s,n.index+2):this.openingBracketBlock(l,"{",s,n.index);var n=this.foldingStopMarker.exec(o);if(n)return n[3]==="end"&&l.getTokenAt(s,n.index+1).type==="keyword"?this.rubyBlock(l,s,n.index+1):n[1]==="=end"&&l.getTokenAt(s,n.index+1).type==="comment.multiline"?this.rubyBlock(l,s,n.index+1):this.closingBracketBlock(l,"}",s,n.index+n[0].length)},this.rubyBlock=function(l,d,s,o){var n=new p(l,d,s),r=n.getCurrentToken();if(!(!r||r.type!="keyword"&&r.type!="comment.multiline")){var i=r.value,_=l.getLine(d);switch(r.value){case"if":case"unless":case"while":case"until":var m=new RegExp("^\\s*"+r.value);if(!m.test(_))return;var g=this.indentKeywords[i];break;case"when":if(/\sthen\s/.test(_))return;case"elsif":case"rescue":case"ensure":var g=1;break;case"else":var m=new RegExp("^\\s*"+r.value+"\\s*$");if(!m.test(_))return;var g=1;break;default:var g=this.indentKeywords[i];break}var R=[i];if(g){var M=g===-1?l.getLine(d-1).length:l.getLine(d).length,S=d,v=[];if(v.push(n.getCurrentTokenRange()),n.step=g===-1?n.stepBackward:n.stepForward,r.type=="comment.multiline"){for(;r=n.step();)if(r.type==="comment.multiline"){if(g==1){if(M=6,r.value=="=end")break}else if(r.value=="=begin")break}}else for(;r=n.step();){var t=!1;if(r.type==="keyword"){var a=g*this.indentKeywords[r.value];switch(_=l.getLine(n.getCurrentTokenRow()),r.value){case"do":for(var e=n.$tokenIndex-1;e>=0;e--){var h=n.$rowTokens[e];if(h&&(h.value=="while"||h.value=="until"||h.value=="for")){a=0;break}}break;case"else":var m=new RegExp("^\\s*"+r.value+"\\s*$");(!m.test(_)||i=="case")&&(a=0,t=!0);break;case"if":case"unless":case"while":case"until":var m=new RegExp("^\\s*"+r.value);m.test(_)||(a=0,t=!0);break;case"when":(/\sthen\s/.test(_)||i=="case")&&(a=0,t=!0);break}if(a>0)R.unshift(r.value);else if(a<=0&&t===!1){if(R.shift(),!R.length&&((i=="while"||i=="until"||i=="for")&&r.value!="do"||r.value=="do"&&g==-1&&a!=0||r.value!="do"))break;a===0&&R.unshift(r.value)}}}if(!r)return null;if(o)return v.push(n.getCurrentTokenRange()),v;var d=n.getCurrentTokenRow();if(g===-1){if(r.type==="comment.multiline")var $=6;else var $=l.getLine(d).length;return new f(d,$,S-1,M)}else return new f(S,M,d-1,l.getLine(d-1).length)}}}}).call(w.prototype)}),ace.define("ace/mode/ruby",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ruby_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/folding/ruby"],function(c,u,b){var x=c("../lib/oop"),y=c("./text").Mode,f=c("./ruby_highlight_rules").RubyHighlightRules,p=c("./matching_brace_outdent").MatchingBraceOutdent,w=c("../range").Range,l=c("./folding/ruby").FoldMode,k=function(){this.HighlightRules=f,this.$outdent=new p,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new l,this.indentKeywords=this.foldingRules.indentKeywords};x.inherits(k,y),(function(){this.lineCommentStart="#",this.getNextLineIndent=function(s,o,n){var r=this.$getIndent(o),i=this.getTokenizer().getLineTokens(o,s),_=i.tokens;if(_.length&&_[_.length-1].type=="comment")return r;if(s=="start"){var m=o.match(/^.*[\{\(\[]\s*$/),g=o.match(/^\s*(class|def|module)\s.*$/),R=o.match(/.*do(\s*|\s+\|.*\|\s*)$/),M=o.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);(m||g||R||M)&&(r+=n)}return r},this.checkOutdent=function(s,o,n){return/^\s+(end|else|rescue|ensure)$/.test(o+n)||this.$outdent.checkOutdent(o,n)},this.autoOutdent=function(s,o,n){var r=o.getLine(n);if(/}/.test(r))return this.$outdent.autoOutdent(o,n);var i=this.$getIndent(r),_=o.getLine(n-1),m=this.$getIndent(_),g=o.getTabString();m.length<=i.length&&i.slice(-g.length)==g&&o.remove(new w(n,i.length-g.length,n,i.length))},this.getMatching=function(s,o,n){if(o==null){var r=s.selection.lead;n=r.column,o=r.row}var i=s.getTokenAt(o,n);if(i&&i.value in this.indentKeywords)return this.foldingRules.rubyBlock(s,o,n,!0)},this.$id="ace/mode/ruby",this.snippetFileId="ace/snippets/ruby"}).call(k.prototype),u.Mode=k}),function(){ace.require(["ace/mode/ruby"],function(c){A&&(A.exports=c)})}()})(L);var B=L.exports;const E=I(B),O=N({__proto__:null,default:E},[B]);export{O as m};
