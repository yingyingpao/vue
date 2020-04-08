## 分支 ##
新建分支 git branch (branchname)

切换分支 git checkout (branchname)

查看所有分支 git branch -a

切换到某一分支 git checkout 切换的分支名称

提交代码到指定分支 git push origin 分支名称

合并分支(把当前分支与branchname合并) git merge (branchname)

查看当前状态 git status

查看所有文件的修改 git diff(如果退不出去 按q键)

查看所有历史提交记录 git log

查看特定文件的提交记录 git log 文件

回滚到指定的版本 git reset --hard 版本号

强推到远程 git push origin branchname --force

当add之后撤回 git reset HEAD

不想要本地的修改，回退到上次的commit git clean -f

git add .或者git add filename
git commit -m '备注'
git pull origin branch
git push origin branch