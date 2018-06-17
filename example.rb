example_hash = {
  :id           => "blog:reload",
  :time         => "*/3 * * * *",
  :command      => "nice bundle exec rake blog:reload",
  :environments => [ 'production', 'staging' ]
}
