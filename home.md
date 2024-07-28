# Headline

> An awesome project.

# For developers
> Навчання програмуванню не може навчити бути експертом, також як і вивчення пензлів та фарб не може перетворити будь-кого на художника. <br>— Eric S. Raymond

## Git flow

Main branch is restricted from direct commits, only Pull Requests (PR) MUST be used.

All commits should be located in separate branches, specified by branch naming policy.

Name of branch should consists of lowercase letters with underscores.

Branches for feature development should be named with pattern: `feature/DOC-xxx/small_description`, where `DOC-xxx` - task ID in issue tracker `[DOC/CMS/SITE]` + task number. The branch should be related only to one task.

Branches for releases should have pattern release/x.x, where x.x = the release version. This branches is also restricted for direct pushes.

Bugfix/hotfix branches should have `bugfix/DOC-xxx/short_bug_description` and `hotfix/DOC-xxx/short_bug_description`.

Feature and bugfix branches should be created from development branch. In some cases, it is possible to create feature branch from another branch, if you need to extend feature, but for some reasons it cannot be done before release.

Hotfix branched should be created from master branch. After merge request acceptance, it is obligatory to synchronize development and master branches.

Template for creating PRs: [DOC-xxx] Short description.

Do NOT squash commits and don’t forget to close branch after merge (activate an appropriate checkbox).

Pull Request description is not required, but is very welcome. 

# License
