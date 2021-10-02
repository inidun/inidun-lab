# JupyterLite Demo

## ✨ Try it in your browser ✨

➡️ **https://inidun.github.io/inidun-lab**

![github-pages](https://user-images.githubusercontent.com/591645/120649478-18258400-c47d-11eb-80e5-185e52ff2702.gif)

## Requirements

inidun-lab only works for modern web browsers:

- Firefox 90+
- Chromium 89+

## Usage
This repository provides a testbench for a JupyterLite deployment of INIDUN notebooks.

### Using Your Own Repository to Build a Release and Deploy it to Github Pages

From the [*Actions*](./actions) tab on your repository, ensure that workflows are enabled. When you make a commit to the `main` branch, a Github Action will run to build your JupoyterLite release and deploy it to the repository's Github Pages site. By default, the Github Pages site will be found at `YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY-NAME`. *You can also check the URL from the Repository `Settings` tab `Pages` menu item.*

__Add any additional requirements as required to the `requirements.txt` file.__

*You can do this via the Github website by selecting the `requirements.txt` file, clicking to edit it, making the required changes then saving ("committing") the result to the `main` branch of your repository.*

__Modify the contents of the `contents` folder to include the notebooks you want to distribute as part of your distribution.__

*You can do this by clicking on the `contents` directory and dragging notebooks from your desktop onto the contents listing. Wait for the files to be uploaded and then save them ("commit" them) to the `main` branch of the repository.*

Check that you have Github Pages enabled for your repository: from your repository [*Settings*](./settings) tab, select the [*Pages*](./settings/pages) menu item and ensure that the source is set to `gh-pages`.

When you commit a file, an updated release will be built and published on the Github Pages site. Note that it may take a few minutes for the Github Pages site to be updated. Do a hard refresh on your Github Pages site in your web browser to see the new release.

