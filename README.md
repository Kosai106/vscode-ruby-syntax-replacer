# ruby-syntax-replacer

## Features

Replace your old syntax...

```ruby
@data = [
  {:location => "Lebanon", :title => "K Frame", :place => "Based in Beirut"},
  {:location => "Germany", :title => "Xolo", :place => "Based in Berlin"},
  {:location => "Germany", :title => "Lichtecht", :place => "Based in Hamburg"},
  {:location => "Netherlands", :title => "Triple-D", :place => "Based in Amsterdam"},
  {:location => "Spain", :title => "Fresh House", :place => "Based in Zaragoza"},
  {:location => "Poland", :title => "Motiv", :place => "Based in Gdansk"},
  {:location => "Italy", :title => "Gayarre Infografia", :place => "Based in Venice"},
  {:location => "Italy", :title => "ATviz", :place => "Based in Rome"}
]
```

... With the new!

```ruby
@data = [
  {location: "Lebanon", title: "K Frame", place: "Based in Beirut"},
  {location: "Germany", title: "Xolo", place: "Based in Berlin"},
  {location: "Germany", title: "Lichtecht", place: "Based in Hamburg"},
  {location: "Netherlands", title: "Triple-D", place: "Based in Amsterdam"},
  {location: "Spain", title: "Fresh House", place: "Based in Zaragoza"},
  {location: "Poland", title: "Motiv", place: "Based in Gdansk"},
  {location: "Italy", title: "Gayarre Infografia", place: "Based in Venice"},
  {location: "Italy", title: "ATviz", place: "Based in Rome"}
]
```

It works very well in HAML too.

From:

```haml
%div{:data => {:someValue => "Hello world", :"other-value" => 123, :"some-really-long-attr" => true}}
```

To:

```haml
%div{data: {someValue: "Hello world", "other-value": 123, "some-really-long-attr": true}}
```

## TODO

- Format on save
- Format selection
- Reverse format
- reverse format selection

## Release Notes

### 1.0.0

Initial release of `ruby-syntax-replacer`

### 1.0.1

Added support for long dashed attributes