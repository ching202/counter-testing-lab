# Publish to GitHub

Target: **ching202/counter-testing-lab**. Visibility must be **public**.
Publishing requires your GitHub sign-in.

From this project folder, run:

```powershell
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git
gh repo create ching202/counter-testing-lab --public --source=. --remote=origin --push
gh repo view ching202/counter-testing-lab --json url,isPrivate
```

Complete sign-in yourself as `ching202`. Never paste passwords, tokens, or
recovery codes into chat. If `gh` is not installed, use the portable CLI prepared
with this lab (from this original project folder):

```powershell
& ..\..\work\gh\bin\gh.exe auth login --hostname github.com --git-protocol https --web
& ..\..\work\gh\bin\gh.exe auth setup-git
& ..\..\work\gh\bin\gh.exe repo create ching202/counter-testing-lab --public --source=. --remote=origin --push
& ..\..\work\gh\bin\gh.exe repo view ching202/counter-testing-lab --json url,isPrivate
```

The portable CLI is not included in the repository or ZIP. On another computer,
install the [official GitHub CLI](https://cli.github.com/). When using the ZIP,
initialize Git and commit the extracted files before running `gh repo create`:

```powershell
git init -b main
git add .
git commit -m "Complete exploratory and white box testing lab"
```

If the repository name already exists, inspect it before choosing another name
or adding files. Do not replace an existing project or force-push.

## Website alternative

1. Sign in as `ching202` and open [New repository](https://github.com/new).
2. Name it `counter-testing-lab`, choose **Public**, and leave README, license,
   and `.gitignore` initialization off.
3. Create the empty repository, then run from this project folder:

```powershell
git remote add origin https://github.com/ching202/counter-testing-lab.git
git push -u origin main
```

After publishing, confirm the page shows **Public**, the tests, the write-up,
and the evidence folder. Verify access while signed out before submitting the
repository URL to Canvas. Expected URL after successful publication:
`https://github.com/ching202/counter-testing-lab`.
This intended destination is not proof that publishing has happened.

Reference: [GitHub CLI repository creation](https://cli.github.com/manual/gh_repo_create).
