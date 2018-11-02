kyco CP Theme
=============
#### Version: 1.2.0

An EE Control Panel theme. It focuses on a highly efficient navigation which is fixed for quick access.


How to install
--------------

Copy the `themes` folder into the root of your EE installation.

This CP theme has been tested with EE 2.7.x, 2.8.x and 2.9.0.


Customisation
-------------

You can manually replace the `logo.png` (in the images directory) to give the login screen a more personal touch.

To customise the CSS, simply run `sass --watch global.scss:global.css` from within the `kyco/css` directory. This will allow you to change the colours in the `global.scss` as you please. Rember to also set `$custom_scheme` to `true` in `_config.scss` if you wish to change the default colours.

Usually you'd go to `_config.scss` flip the `$custom_scheme` to `true`. Then you'd navigate to the `global.scss` and change your primary colour and primary font colour as shown by the comments in that file. Anything else is really up to you.


Conflicts:
----------

- Superfish EE Control Panel - uninstall Superfish to resolve the conflict


Support
-------

For bugs or improvements please use the [issues tab](https://github.com/kyco/kyco-cp-theme/issues) or email [support@kyco.io](mailto:support@kyco.io).
