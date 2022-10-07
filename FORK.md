# Fork

## Fork Strategy

This repository is a fork of the official [MITRE ATT&CK™️
Navigator](https://github.com/mitre-attack/attack-navigator) repository that is
customized for holding the [Defending IAAS with
ATT&CK](https://github.com/center-for-threat-informed-defense/defending-iaas-with-attack)
collection. This fork is intended to track the upstream project--not stagnate--and we adopt the following
strategy to minimize the maintenance burden of tracking an upstream:

1. Make minimal changes (see below).
   * The fewer changes we make, the less likelihood of future merge conflicts.
     We only make changes that we need.
   * For example, disable any editor auto-formatting that might cause large
     diffs and strive to make minimal edits to files that exist in the upstream.
2. To avoid consuming bugs from upstream, we only track official releases.
   * Instead of tracking the `upstream/main` branch, we only merge tags.
   * While we follow the tags from upstream, we do not actually create tags of
     this repository.

## Customizations

The forked repo is customized in the following ways:

1. A note added to the top of `README.md`.
2. A new file called `FORK.md` (this file).
3. Edit `nav-app/src/assets/config.json` to include the DIWA collection.
4. A GitHub Actions workflow `.github/workflows/publish.yml` to automate builds
   and deploy.
5. Add `.vscode/settings.json` to disable auto-formatting in Visual Studio Code.
6. Edit `tabs.component.html` with some explanatory text so users understand
   that this is not the main navigator instance.
7. Edit `tabs.component.scss` with a color schema that also highlights the
   difference between this and the main instance.
8. Set the base HREF in `index.html` to match our GitHub Pages URL, and
   customize the favicon.
9. Add a `nav-app/src/favicon.png`.

Whenever you edit this repository, make sure to maintain the list above. This
list makes it easier to understand where merge conflicts *can* happen.
Furthermore, merge conflict resolution is much easier when the *intent* of each
change is known.

## Procedures

When checking out this repository for the first time, you should add the upstream
as a remote:

```
$ git clone git@github.com:center-for-threat-informed-defense/attack-navigator.git
Cloning into 'attack-navigator'...
remote: Enumerating objects: 10506, done.
remote: Counting objects: 100% (337/337), done.
remote: Compressing objects: 100% (117/117), done.
remote: Total 10506 (delta 214), reused 282 (delta 206), pack-reused 10169
Receiving objects: 100% (10506/10506), 8.55 MiB | 6.64 MiB/s, done.
Resolving deltas: 100% (8349/8349), done.

$ cd attack-navigator

$ git remote add upstream git remote add upstream git@github.com:mitre-attack/attack-navigator.git
```

To merge in changes from upstream, you should first fetch the latest refs.

```
$ git fetch upstream --tags
remote: Enumerating objects: 1003, done.
remote: Counting objects: 100% (842/842), done.
remote: Compressing objects: 100% (353/353), done.
remote: Total 773 (delta 519), reused 648 (delta 411), pack-reused 0
Receiving objects: 100% (773/773), 22.62 MiB | 5.78 MiB/s, done.
Resolving deltas: 100% (519/519), completed with 41 local objects.
From github.com:mitre-attack/attack-navigator
 * [new tag]         v4.6.6                                       -> v4.6.6
```

The output shows us that a new tag `v4.6.6` has been created in the upstream
that we do not have in our local clone yet. Run this command to merge it in:

```
$ git merge v4.6.6
Updating c0191b5..7c166ee
Fast-forward
 .github/workflows/buildcheck.yml                                                |    28 -
 .github/workflows/dependabot.yml                                                |    12 -
 CHANGELOG.md                                                                    |     5 +
 nav-app/karma.conf.js                                                           |    32 +-
 nav-app/package-lock.json                                                       | 20325 ++++++++++++++++++++++++++++++++++++++++++-----
...
```

If there are merge conflicts, you'll need to resolve those, `git add` each file
that has conflicts, and then `git commit` to finish the merge.

Finally, run `git push` to push the new changes back to this repository. The
changes will be automatically be built and deployed to GitHub Pages.
