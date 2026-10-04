---
layout: page
title: "AL's Math Diary"
description: "Mathematics notes by Yongxi (Aaron) Lin on harmonic analysis, PDEs, measure theory, probability, and algebra, organized by year."
permalink: /archive.html
nav: blog
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
  <h2 class="year-heading">{{ year.name }}</h2>
  <ul class="post-list">
    {% for post in year.items %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
