# _plugins/ext.rb allows you to define custom plugins and/or require
# plugins that otherwise wouldn't work with Jekyll

# Activate jekyll-tagging
# https://github.com/pattex/jekyll-tagging
require 'jekyll/tagging'
require 'sentry-ruby'

Jekyll::Hooks.register :site, :after_init do |excerpt|
    Sentry.init do |config|
        config.dsn = ENV['SENTRY_DSN']
        config.traces_sample_rate = 0.5
    end
end
