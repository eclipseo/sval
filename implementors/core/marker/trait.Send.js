(function() {var implementors = {};
implementors["sval"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/struct.Error.html\" title=\"struct sval::Error\">Error</a>",synthetic:true,types:["sval::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"sval/test/enum.Token.html\" title=\"enum sval::test::Token\">Token</a>",synthetic:true,types:["sval::test::std_support::Token"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/stream/struct.OwnedStream.html\" title=\"struct sval::stream::OwnedStream\">OwnedStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["sval::stream::owned::OwnedStream"]},{text:"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/stream/struct.RefMutStream.html\" title=\"struct sval::stream::RefMutStream\">RefMutStream</a>&lt;'a&gt;",synthetic:true,types:["sval::stream::owned::RefMutStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/stream/stack/struct.Pos.html\" title=\"struct sval::stream::stack::Pos\">Pos</a>",synthetic:true,types:["sval::stream::stack::Pos"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/stream/stack/struct.Depth.html\" title=\"struct sval::stream::stack::Depth\">Depth</a>",synthetic:true,types:["sval::stream::stack::Depth"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/stream/stack/struct.Stack.html\" title=\"struct sval::stream::stack::Stack\">Stack</a>",synthetic:true,types:["sval::stream::stack::Stack"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval/value/struct.OwnedValue.html\" title=\"struct sval::value::OwnedValue\">OwnedValue</a>",synthetic:true,types:["sval::value::owned::OwnedValue"]},];
implementors["sval_json"] = [{text:"impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval_json/struct.Formatter.html\" title=\"struct sval_json::Formatter\">Formatter</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["sval_json::fmt::Formatter"]},{text:"impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval_json/struct.Writer.html\" title=\"struct sval_json::Writer\">Writer</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["sval_json::std_support::Writer"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"sval_json/struct.End.html\" title=\"struct sval_json::End\">End</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["sval_json::End"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()