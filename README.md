kyco CP Theme
=============
####Version: 1.1.1

An EE Control Panel theme. It focuses on a highly efficient navigation which is fixed for quick access.

**Note:** There is now a kyco-new theme in the install which is a work in progress
(it works just fine for the default colour, custom colour scheming not done yet :)).

How to install
--------------

Just copy and paste the files into the root of your EE installation.

This CP theme has been tested with EE 2.7.x, 2.8.x and 2.9.0.


Customisation
-------------

You can manually replace the `logo.png` (in the images directory) to give the login screen
a more personal touch.

To customise the CSS, simply run `sass --watch global.scss:global.css` from within the `kyco/css`
directory. This will allow you to change the colours in the `global.scss` as you please.
Rember to also set `$custom_scheme` to `true` in `_config.scss` if you wish to change the
default colours.

Usually you'd go to `_config.scss` flip the `$custom_scheme` to `true`. Then you'd navigate to
the `global.scss` and change your primary colour and primary font colour as shown by the
comments in that file. Anything else is really up to you.


Conflicts:
----------

- Superfish EE Control Panel (simply uninstall superfish to get kyco cp theme working)


Support
-------

Info on [SASS](http://sass-lang.com/).

For bugs or improvements please use the [issues tab](https://github.com/kyco/kyco-cp-theme/issues)
or email [support@kycosoftware.com](mailto:support@kycosoftware.com).
