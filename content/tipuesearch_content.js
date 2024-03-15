var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://a92826.github.io/cd2024/ \n 網誌: https://a92826.github.io/cd2024/blog \n 簡報:  https://a92826.github.io/cd2024/reveal \n 倉儲:  https://github.com/a92826/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '2a w4 教學影片任務', 'text': '', 'tags': '', 'url': '2a w4 教學影片任務.html'}, {'title': 'cd2024_2a_w2_4_利用\xa0 Replit 管理 Github Classroom 分組倉儲', 'text': '\n \n 影片摘要: \n 這部影片主要講述了在 Replit 平台上建立團隊、分組、設定管理權限以及進行程式開發的流程。具體內容如下： \n \n \n 計劃中的團隊建立： \n \n 每個組需要有明確的識別信息，包括組名、組長名稱、Github 帳號等。 \n 使用 Replit 平台創建團隊時，組員需要選擇正確的組別並加入相應的團隊。 \n \n \n \n 組長的操作： \n \n 組長可以使用 SSH 方式添加管理權限，這需要對 Github 帳號和程式碼倉庫進行設定。 \n 在 Replit 使用者界面，組長可以方便地管理團隊，包括建立分組作業、管理團隊成員、設定權限等。 \n \n \n \n 程式開發流程： \n \n 進入程式碼倉庫後，可以進行靜態部署（如編輯 HTML、CSS 檔案）和動態部署（使用 Python 進行開發）。 \n 提交程式碼時，可以使用 Git 的相關指令（如 git add、git commit、git push）進行管理，確保程式碼的同步和版本控制。 \n 注意容量限制和運行時間，避免超出限制造成開發困難。 \n \n \n \n \n 00:03:01 - 00:03:25 如 00:04:11 - 00:06:15 我們假如來看這 00:07:16 - 00:09:13 上面的這個規劃的 00:10:01 - 00:13:07 一下每一組都要知道他的這一 00:14:16 - 00:16:02 組別的團隊 00:17:06 - 00:18:28 現在用的這個其中 00:20:07 - 00:22:01 稱呢叫做2A嗎對不對 00:23:08 - 00:24:17 以第一組 00:25:07 - 00:26:21 n我 00:27:13 - 00:29:17 建立這個me turn MI 00:30:08 - 00:32:23 然後我們是A8A 00:33:11 - 00:35:04 然後是group one 00:36:10 - 00:37:17 一旦假如 00:38:12 - 00:39:22 待會團隊建 00:40:10 - 00:41:28 你也拿到這個 00:42:14 - 00:43:11 你就join 00:44:16 - 00:46:11 所以假如是第二組的 00:47:28 - 00:48:22 建立自 00:50:14 - 00:53:10 第二叫MIMID 00:54:14 - 00:55:21 da 00:56:20 - 00:57:14 2 00:58:17 - 00:59:20 好一直到七 01:00:19 - 01:01:27 八這樣下去 01:01:27 - 01:03:04 好所以這裡就是 01:03:28 - 01:05:19 規定好的這個 01:07:10 - 01:09:07 好所以我現在就是 01:09:22 - 01:12:22 換到第一組組長的github賬號 01:13:22 - 01:15:12 很好OK 01:15:12 - 01:16:19 這個是他的賬號 01:17:23 - 01:19:02 到這個 01:19:26 - 01:22:04 建立2A的這個分組作業 01:22:26 - 01:23:26 點進來 01:23:26 - 01:27:01 就可以直接進入 01:28:16 - 01:30:05 他的這個部分我的 01:30:25 - 01:32:11 這個示範的 01:32:26 - 01:34:14 啊那你你不要加入 01:34:29 - 01:36:14 不能再加入其他 01:37:04 - 01:39:14 OK好所以我這邊我叫 01:40:04 - 01:45:26 組長嗎dag one你 01:47:00 - 01:47:00 MID然後是然後是ag1 01:52:04 - 01:53:27 好所以我這樣子的話 01:56:12 - 01:59:22 假如剛剛那個連結啊我第一組的組員 02:00:01 - 02:02:20 點進來之後啊他就選擇 02:03:19 - 02:03:19 哦那你不要加錯組了你就是第一組的組員才加入 02:07:08 - 02:10:08 那我們是MId甲班 02:10:28 - 02:12:25 group one好就 02:13:24 - 02:15:21 好那create這個team之後 02:17:10 - 02:18:28 我使用者只要接 02:19:12 - 02:20:21 他基本上就會 02:21:16 - 02:22:21 的管理權 02:22:25 - 02:24:21 那我們昨天在乙班 02:25:13 - 02:27:22 那個倉儲啊是空的倉儲 02:28:19 -02:29:28 啊那我們看 02:30:14 - 02:32:19 看拿到的倉儲好像我們是7 02:33:22 - 02:37:09 倉儲好像是空的但是這個我不是等一下 02:38:20 - 02:41:04 哦所以他拿到之後啊還好 02:42:10 - 02:43:29 這個先樂後苦 \n 先苦後樂 \n 所以你講 \n 要怎麼從零開始的話 \n 後面再來 \n 用這個期末專案的時候再來 \n 乙班昨天拿到 \n template \n 什麼啊我們這個就直接複製對 \n 這個進來之後啊因為我是以 \n 我們甲班第一組 \n 我已經有管理權 \n 可是我那個前面 \n 我們的期中 \n 名稱 \n 後面這個就是第一組組長建 \n 所以這個就是對 \n 倉儲OK \n 還沒有起來 \n 所以組長的話 \n 當然也可以交代 \n 進入這個 \n 好然後我就可以進入 \n 進入這個主分支 \n 然後我把它 \n 啊所以這個就比昨天乙班 \n 你在這邊的話只需 \n 我啟動跟他pages \n 可以把它弄起來 \n 把它弄起來之後啊其實 \n 可以接著來做所謂code \n OK因為在這個code底 \n 的話我以管理 \n 每一個主人都有 \n 所以我只需要點code \n 看到這邊啊他的 \n 一個codespaces \n OK所以你在 \n 對任何一個倉儲其實都可以點 \n creat那creat他就會跳到這個 \n 的環境啊那這邊的話就是給你的資源相對就比較多了 \n 許多的終端機 \n 所以我們就不需要在像 \n 共用443然後在那邊切 \n 不用他這邊可以兩個同時起來我起來把它啟動給你 \n 這邊的意思就是說你必須要等他 \n 哎他所以靜態他應該有了 \n 只需要進到這裡面 \n 所以我從這裡點 \n 已經OK了就跟我們個人 \n 只不過他是登 \n 所以你假如說 \n 反他的話 \n OK \n 因為你已經沒有辦法直接用a com去設定許可權 \n 上許可權吶不會跑到這個 \n 你雖然擁有這個賬號的許可權啊這個倉儲的 \n 但是他是登記在這個MD24 \n 所以我們的做法是把它 \n 我們用SSH \n 也就是點SSH的方式我們把key的部分放進來 \n 還是可以拿到許可權在replit \n 可是在replit \n 用起來刪掉你的這個點SSH就 \n 不是方法 \n 可是你假如是在這裡面就 \n 我們要啟動這個動態的話我們只需要 \n 加上因為我們現在要安裝模組 \n 把模組裝起來所以這個呢 \n 終端機他 \n 端機 \n 之後啊你就利用 \n 我们去改变模式 \n 被使用者 \n 加上執行 \n 然后是哪一个档呢是init \n replit好那只要 \n 之后啊我们就可以直接 \n 然后他就会帮我们把 \n 给安装好那这个时候你就可以感受到他给我们的两个code啊 \n 大的这个记忆体啊他速度也比较快一点 \n OK已经好了所以这个时候啊我们 \n 发现我们没有run了对不对 \n 设定了所以你必须要自己 \n python3 main.py \n 我的意思就是说我现在要 \n 我的main.py \n 你伺服 \n init的網址跟 \n 啊所以这个部分你只要按这个 \n 会执行动态的 \n 告诉你说 \n 利用8080 \n 用浏览器开启 \n 按到你的 \n 所以这个时候 \n 因为他这个也是乱码 \n 所以我们也不用去管ADMIN \n 别人会进来因为别人根本不晓得 \n 是用什么所以同样的我们就用admin进来 \n 哎好了进来之后 \n 你就可以直接点这个然后告诉他说我是MId1 \n 哎分组 \n 好然后我是send \n 我在这里面我就convert \n 然后你回来的话也也没有 \n 所以你这个终端机现在我没有在背后执行 \n 你就跑到他的menu这里 \n 然后他就有 \n 你要开启 \n 正常就是一个月120个core \n core是小時 \n 时间就要争取 \n 我就打开一个新 \n 好所以你透过这个menu你 \n 我可以 \n 那我新增这个終端機 \n 这个时候我是 \n push对吧 \n 这就在执行 \n 这个我现在要执行 \n 所以我就git add \n 哎我在git commit \n 告诉他说我是已经 \n 把 \n 开头哎那应该是 \n 网页网页的标题 \n 问了啊好所以我这个时候我就commit \n 然后你会发现说github \n 因为他就是github账号 \n 前面有权限的问题 \n 直接就推了连设定也不用 \n 他已经在转档 \n 你只要回头 \n 在这个对 \n 档 \n 那么在哪里转档 \n 在 \n 转档他已经在转档 \n 提交已经跑到这里来哎那我 \n 静态怎么办 \n 好那启动静态假如 \n 这个终端机你是在启动 \n 通常我们会在三 \n OK所以现在是三个所以这个是让你a commit push \n 那这个我想要 \n 静态啊那静态啊因为这里有python \n 我python3 \n 模组 \n server \n 的意思就是说 \n 这边就 \n 所以我用python3啊 \n 表示模组 \n 因为python3他是内建HTTP \n 哎那我们在replit \n 这样做因为他不行啊因为他 \n 啊那在这里就可以因为他给 \n 所以我们现在 \n 他都不管你 \n 他都开 \n 下去的时候他又启动 \n git pull好 \n 那你这里打开就是静态 \n 然后呢那就很方便 \n 打开这里就静态 \n 好那只是说 \n 你要来编辑 \n 我们当然不会在这里但会 \n 我在这里然后 \n 半天 \n 然后用的 \n 算秒的对不对 \n 这 \n 不会在这里 \n 你看我要赶快把它 \n 啊我就跳到这边来我下哎 \n 一秒一秒过去 \n 对 \n 我就直接跳到这里 \n 那要关掉它有两个地方一个 \n 首先从这里把它关掉因为我已经不要 \n OK那关掉他就不不去 \n 死了 \n 他应该就关掉了 \n 对我已经把我的codespace是关掉哎 \n 關掉 \n 再按一下 \n 哦他要让他執行 \n 只是启动3个 \n 好所以我 \n 关掉 \n 你看到他的地方啊就是 \n github在 \n 你直接打codespace \n 哎他就会看到我已经 \n 第一组组长的账号 \n 啊你按他他基本上 \n 那现在他给你的 \n 两个core \n 大方给你8RAM 8gb \n 是你的容量我那容量我们刚 \n 看到他是允许总容量 \n 量是15好所以我们刚刚可能用的 \n 好所以他基本上 \n 两个小时 \n 会启动 \n 计时的 \n 那么容量啊我们来编辑 \n 哎我们就 \n 你就直接跑到每一个人登 \n 工作他是不算是 \n 点这个 \n OK那在这里做你另外 \n 转档提交哎在 \n 提交呢那你 \n 可以啊你在这边你想要 \n 的答案 \n 改名也可以 \n 好那你 \n 看好之后 \n 然后你再想办法跑到codespace \n 是你回到re \n replit因为 \n 他也 \n 好 \n 影片我们再来 \n 那我假如把 \n 对应的 \n 刚刚设定的这个分组 \n 丢到这里之后啊我到底要 \n 我到底应该要怎么样来 \n 的权限OK好所以我们这个影片就 \n 这边然后待会 \n 这个 \n 组的 \n 在我们的 \n 团队里面好所以我们先把 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'cd2024_2a_w2_4_利用\xa0 Replit 管理 Github Classroom 分組倉儲.html'}]};