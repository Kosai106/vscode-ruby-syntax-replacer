# Ruby Syntax Replacer for VSCode
_Goodbye old hash rocket syntax_

## Features

Ruby
```ruby
# Old syntax
data = [
  { 1 => "en", 2 => "to", 3 => "tre" }
  { :one => "un", :two => "deux", :three => "trois" }
  { "weights" => ["pound", "kilogram"], "lengths" => ["meter", "mile"] }
  { :de => { :one => "eins", :two => "zwei", :three => "drei" } }
]

# New syntax
data = [
  { 1: "en", 2: "to", 3: "tre" }
  { one: "un", two: "deux", three: "trois" }
  { "weights": ["pound", "kilogram"], "lengths": ["meter", "mile"] }
  { de: { one: "eins", two: "zwei", three: "drei" } }
]
```

HAML
```haml
-# Old syntax
%div{:data => {:someValue => "Hello world", :"other-value" => 123, :"some-really-long-attr" => true}}

-# New syntax
%div{data: {someValue: "Hello world", "other-value": 123, "some-really-long-attr": true}}
```