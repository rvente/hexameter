---
title: "The Open Source Workflow: Part 2"
date: 2018-05-22
excerpt: "So, you're tired of using closed source software. You're ready to take the open source leap. Where do you start?"
category: "Workflows"
---

# Open Source Part 2: Papers, Essays

So, you're tired of using closed source software. You're ready to take the open
source leap. Where do you start? Well an easy starting place is your essays.

You can look
[here](https://gist.github.com/maxogden/97190db73ac19fc6c1d9beee1a6e4fc8) for a
similar post to mine with a focus on citations, and LaTeX. Mine will offer a bit
more guidance for beginners. I will outline Markdown, Pandoc, and breifly delve
into LaTeX.

By the way, I pronounce LaTeX `/ˈlɑːtɛk/` (lah-tehk) and I've heard programmers say
`/ˈleɪtɛk/` (lay-tehk). People generally don't call it the same as the name for the fabric.

## My Templates repository

The companion repository is located [here](https://gitlab.com/rvente/Templates).
There you will find just about everything you'll need. If you alredy know how to
use these programs to generate files, then all you need to do is clone the
repo and hack away. If you are new to this, take a look around, and try to get
a feel for how everything might work before you do anything else.

## The (not so) Simple Bare Necessities

So, let's get started explaining what's what. I'll be talking about Pandoc,
LaTeX, and Markdown. Markdown is a markup language written to be very easy. A
markup language is basically a language that encodes information about what a
particular piece of content *means.*

I'm writing this post in Markdown as we speak. To get the word "means" in
italic, I type `*means*`, which is shown like *means*. If I wanted to bold it, I
just double up: `**means**`, which is shown like **means**. That's just the tip
of the iceberg. You can read more about it
[here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis).
Don't worry about learning the whole thing for now, because in practice, you'll
only use a few of these things. I should mention how easy it is to feel
intimidated. I was there too and I can assure you the hardest part is starting.
With my templates, everything will come together. I'm doing the hard work for
you.

Next up, [Pandoc](https://pandoc.org/) is a system that converts Markdown into
your actual document. It uses this ancient typesetting engine called
[TeX](https://en.wikipedia.org/wiki/TeX) to produce gorgeous documents. That's
as much as you need to understand, and skip to the next section if you just
wanna get on with it. If you say you can learn more about the systems behind it.

So last up, [LaTeX](https://www.latex-project.org/get/) is the name of the
 ~~programming~~<sup id="a1">[1](#f1)</sup> markup language that TeX uses to understand what you mean. So, to recount,
Markdown is used by Pandoc to generate LaTeX. That code is then used by TeX to
generate the document. `pandoc: markdown -> LaTeX` then `pdflatex: LaTeX -> PDF`.
Complicated, but not needlessly so.

And all that much doesn't matter so much if you're only using it.
It's all taken care of automatically by Pandoc. But nonetheless, it begs the question:
Why's it so complicated? Well, it's story time.

LaTeX was written in the 1980s or something like that. My theory is that this
was before programmers realized how to make easy to use programming languages.
Then, after a while, people got sick of writing so much LaTeX code, and ended up
making Markdown one of the proxy languages to make using LaTeX easier. So why do
you care? Now it's easier than ever to make stunning documents. Of course, we
still haven't answered why it took them so long. Well, my other theory is that
since most people who use LaTeX are mathematicians and physicists and
scientists, that they liked using a hard language to make themselves feel
smarter. That's why I use it, after all.

## Getting Down to Business

So, down to the nitty-gritty. What do I actually need to start?

First, install LaTeX. Then Pandoc. If you're using Arch Linux, you can run a
simple, `$ yaourt -S pandoc biber texlive-all` in your shell and you've got 99%
of the packages you will ever need.

Installing it on proprietary operating systems is left as an excercise for the reader.
If you want to add it here, make a pull request on [Github](http://github.com/rvente/ink).

Let's assume your Markdown file is called something like `essay.md`. All you
have to do now is run `$ pandoc essay.md -o essay.pdf` and bam, your file is
rendered to a pdf. Of course no one likes typing that out all day, so I've
bundled in Makefiles for all of my template documents. On a unix machine, all
you have to do is run `make`. and out comes your pdf.

Pandoc can export to just about any format. `docx`, `html`, `epub`? You name it.

## Learning the System

The above is pretty much all you need to get started. Just download the files,
edit the md file, and run `make` on them. It's that simple. But what if you want
to keep digging deeper? Let's run through a really simple sample document.

```markdown
---
title: Linguistics Assignments
author: Ralph Vente
date: 2018 Spring Semester
indent: true
---

# Linguistics Assignment 1

An interesting thing I noticed is that there's a big difference in how my Mom
and how my Grandma pronounce the word for "a lot" in Haitian Creole, "enpe."

| Speaker   | “enpe” Pronunciation   |
| --------- | ---------------------- |
| Mom       | [\textscoelig pœ]      |
| Grandma   | [əp\textepsilon]       |

My theory is the following: My mom was part of Haiti's educated class and
learned French in school, which changed how she pronounced Creole’s nasal
vowels. By contrast, my grandma never learned French, so her more rural dialect
has what I think is the more common Creole pronunciation.

```

Here is that same document rendered out in pdf form.

![sample output from Pandoc](https://raw.githubusercontent.com/rvente/ink/master/assets/images/2018-05-21-open-source-2-media/linguistics-assignments.png)

Here I have a table, and some paragraphs and an H1. That's short for Heading 1.
Instead of making your section headers bold and increasing their size, you just
tell the system that you want this to be of the Header 1 type and it uses
built-in definitions to determine the output.

Yeah, you think to yourself, but that's not MLA. Easy fix. Just use the `mla13`
package and everything becomes MLA. ~~You might have to add `\singlespacing` before
the tables to get them looking right, but that's two small changes and your
whole doc has changed.~~ *use the right packages, and there should be no extra work needed* 
No need to fiddle around with font settings or margins or anything. It just works.

```yaml
---
title: Linguistics Assignments
author: Ralph Vente
date: 2018 Spring Semester
indent: true
header-includes:
  - \usepackage{mla13}
---
```

Just like that, the whole document becomes MLA formatted. That's the beauty of it.

If you wrote an entire paper anticipating that you would be publishing it in the
Chicago format and it turns out you actually needed to turn it in as APA, you
can just change one line of code, and all of you citations, your whole
bibliography, and just about your entire document will change form and become
completely correct.

## Final Words

I should mention a few things. You should give yourself a weekend to learn this.
For a lot of us, it's like learning how to walk all over again. In the long term
though, I'm happy I made this decision and I wouldn't have it any other way. I
will never have to write a bibliography again and I will never have to think
about formatting. Everything just falls into place and produces gorgeous
documents, but don't think you won't have to work and earn it.

For LaTeX, I should mention that there's an online editor that you can use, It's
freely available. It's called [ShareLaTeX](https://www.sharelatex.com/), and
it's a great resource if you don't have a Unix machine.
[Overleaf](https://www.overleaf.com/#) is the exact same product. They've
merged, actually. They allow you all of the benefit of LaTeX in a pretty online
interface. There, you can also find an absurd amount of guidance through all of
the templates. It's a great place to start if you're going from Markdown to
something more low-level.

So, here are the tools. Get those coding fingers ready and hack away.

-----

**1**
Yeah, it is a language where Programming Language is defined as any language that is [Turing Complete,](https://www.overleaf.com/learn/latex/Articles/LaTeX_is_More_Powerful_than_you_Think_-_Computing_the_Fibonacci_Numbers_and_Turing_Completeness) but it's not used for programming. It's used for markup. [↩](#a1) 