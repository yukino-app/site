---
title: How does it work?
template: page
---

## Overview

Yukino does not depend on any kind API service, rather scrapes the sites directly. Everything is done within the application. Does this benefit? It depends. The application is rather fast without depending on an external API. At the same time, it is slower due to lack of caching results.

## The flow

<img src="{{ data.config.computed_base_url }}/assets/images/flow.png">

## Privacy

When it comes down to security, it's very safe. The fetched HTTP response is never evaluated, but rather necessary things are just taken to produce results. But is it legal to scrape webpages? It is neither legal nor illegal. It is legal as it only scrapes only the publicly available content.
