# Subsetted fonts

The fonts here are a result of passing the fonts from the parent directory through [glyphhanger](https://github.com/zachleat/glyphhanger).

Glyphhanger is a tool to remove characters from a font file, with the main purpose of reducing file size and website load time. Here we use it in a kind of static way, by telling it precisely what characters we want to remove. It's also usable in a more dynamic way, where it reads your website and removes unused characters accordingly, but it requires a bit more configuration. This will do just fine!

> Glyphhanger is not integrated locally as it requires a few python dependencies… if needed, install glyphhanger locally on your machine to update the files.
> Glyphhanger v5.0.0 was used.

Command used to generate files in this folder:

```bash
# pwd = public/assets/fonts/subsetted
glyphhanger \
	--subset="../*.woff2" \
	--formats=woff2 \
	--output=. \
	--whitelist="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀàâÇçèÉÊËéêëÏîïÔôùûŒœÆ  &•#…€$~˚°%\_=+-×÷\*/[]{}()<>,.:;?@«»©™←↑→↓↖↗↘↙√≤≥'\!\’\“\”\\\`\""
```

You guessed it: the important part of the command is the `whitelist` param that lists all characters we want to keep in the subsetted file.

The current whitelist is pretty generous but with specific future content you might need to add characters.

You can use a font tool like [Font Manager](https://github.com/FontManager/font-manager) to check what characters are included in the base fonts and copy the characters in the whitelist.
