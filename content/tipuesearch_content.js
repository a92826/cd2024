var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://a92826.github.io/cd2024/ \n 網誌: https://a92826.github.io/cd2024/blog \n 簡報:  https://a92826.github.io/cd2024/reveal \n 倉儲:  https://github.com/a92826/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Latex', 'text': '學位論文翻譯 \n', 'tags': '', 'url': 'Latex.html'}, {'title': '2a w4 教學影片任務', 'text': '', 'tags': '', 'url': '2a w4 教學影片任務.html'}, {'title': 'cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲', 'text': '\n 影片摘要: \n 這部影片看起來是關於使用 Replit 來管理 GitHub Classroom 分組倉儲的操作步驟。其中包括了以下步驟： \n 在 Replit 中維護分組網站，因為它是統一的組織。 操作 GitHub Classroom 以獲得倉儲權限。 使用 UI 或 Python 將內容導入倉儲。 建立 SSH 金鑰並上傳至組長的 GitHub 賬號。 確保設定正確，例如改為 SSH 連接協定。 執行 push 操作來確保權限設定成功。 總的來說，這部影片描述了在 Replit 中操作以管理 GitHub Classroom 分組倉儲的步驟和注意事項。 \n 觀後心得: \n 根據這部影片的內容，使用 Replit 管理 GitHub Classroom 分組倉儲需要進行一系列步驟，包括建立 SSH 金鑰、導入倉儲內容、設定連接協定等。這些步驟看起來可能有些繁瑣，但是是確保分組倉儲正確運作的重要步驟。 \n 我的心得是，管理 GitHub Classroom 分組倉儲需要一定的技術和操作經驗，特別是在確保權限和連接協定正確設置方面。這需要細心和耐心來完成，但一旦設置成功，就能確保分組倉儲的正常運作和安全性。因此，我認為熟悉這些步驟並掌握相關技能對於管理分組倉儲是非常重要的。 \n 逐字稿: \n 0:02 那我們跑到身份這里那我們現在是這樣然後在他的reep里啊，來維護他的分組網站，因為這個分組網站是統一啊，從這邊的這個叫organization其實也是賬號，所以雖然他有管理，OK，每一個人只要參加這個。 \n 0:30 八個人全部都有維護這個倉儲的權利。OK，你假設面用新建一樣音破這個音破啊，在它的這個這里不會出現，不會出現那個分組的網站，我們必須要從這個來把它導。 \n 1:00 這個是他賬號原先的GitHub classroom是可以跟合作的，可是對手，所以他就把那個把它切斷了。那切斷之後啊，我們要從我們就利用UI，我還是可以把它的內容，因為畢竟這個是好，所以我們我們把它導進來。 \n 1:28 可以把它導進來，應該是這個我們換成Python之後啊，我們應該按這個才對，因為你按它它又倉儲去了好，所以我們現在因為這個是它的組員的話，對於這個建的，但是這個權限並沒。 \n 1:58 上好，所以我也是把它導入的，它就會一個對這個分組倉儲只要在這邊維護啊，我沒有建立起，我根本推不回去的，因為我沒有，我看底下是組組組長完全沒有身份在想要。 \n 2:28 我們已知的Gear我，我們要把基本上要讓我它沒有辦法，想要用一個就好，用一個OK，所以我在這里呀，我用想辦法，然後我用點，嗯SSHK鍵鍵，然後我給它按下去的話，它應該會。 \n 2:56 那我們知道它是有幫圖幫圖好，所以你，你，我們，我所一邊操作，因為我做慢一點，我SSHK鍵我按下去應該就會跟我們S點CYCU上一樣OK，因為它是Linux好，所以基本上你要不要Run開始它是沒有。 \n 3:24 一旦我們要求的話，你就回答，所以它基本具備我執行S啊這個功能按接下來的話我就可以，然後我再按按它這個速度有一，那這個就跟我們記得它建立的這一。 \n 3:55 是在home runtage下面，這個其實是虛擬的，因為OK，所以這個時候是我，我想要執行那要執行的時候跟我ICU一樣，那我Empty for no意思就是說我，我就一直按enter就好，不會有額外的啊這個，所以再按一個enter，然後再按。 \n 4:24 所以假如你之前有見過，你就會發現它其實有了這個我們看看，因為我們需要好，所以現在之後啊，你把它更換到上好。那你假如假如我現在在什麽就打PW。 \n 4:54 In出現是in是工作，所以我它到底是在什麽，所以你就會發現說，哦，原來倉儲啊，我的倉儲等就會在home runner下面，那我現在只要我就跳跳到我就可以進入點SSH好，那我。 \n 5:24 所以我只要往上點SS，因為它是隱藏的，所以我我跳回來，所以我在這里我用長列list，然後是用long更換目錄空一格兩個一個目錄，換句話說，dash mid AG。 \n 5:52 跳跳到runner跳在runner下，因為剛剛我已經執行的時候我就知道它這個點是在runner這個目錄下，所以我往上跳到目錄下的點，然後我用場地可以看到那兩個果不其然，所以我就看到我的這個就是我這個就是public把我的public。 \n 6:22 第一組組長的GitHub帳號下應該就可以了，怎麽辦？所以我們現在就必須要好。所以我們現在要把一根應該是不太對哦，因為我們這樣的應該從window送上去也可以好，那這兩個怎麽樣能夠因為在Windows是把它。 \n 6:51 直接丟到特定的位置在執行這個哦，那好，因為否則的話我就想辦法到這里面，我就然後我就可以把它那也可以。接下來必須要把這一放到組組長，然後說我要用的就。 \n 7:21 所以你基本上看下來，可是這里面沒有config的設config的設定啊。這里面假設我要在這個目錄，哇好，所以但是你假如全部都在，可能會比較簡單，因為我需要的config我要有hose，hose，我們一般，然後我要有user，digit。 \n 7:50 表示我要連線我就要跟那，因為我們現在在上面對它打開也是在PV4，所以在S點CYC我們設定不用你的config好，所以我就先從這里面L在C我建立好，我直接從window做好了，OK，所以這里面呢，我就把。 \n 8:20 按上D MIDA，然後是G one，然後我把它的在這里往上送。所以我這里要叫con是一個那第二個在建立我的I好，那怎麽建找到我的需要有。 \n 8:49 這邊的話這里就有菩提，所以我用好了好，所以我就不要用了。這里面SAC你還必須要搬動檔案，那其實這個待會過了一段時間它就，所以我們必須要有程式就在上面來做覆制的動作。現在先把這個程式我先丟上去。ctrl a ctrl C。 \n 9:21 E，然後ZHY上來。那其實待會大家就一組組長，因為這個是這個是公開的他的賬號二二。 \n 9:49 哦，因為到底導入一個osm，然後啊，是加入沒有目錄的話好，所以這兩行的意思我們建因為有一段時間之後repre賬號它不key，可是問題它又沒有關掉二。 \n 10:19 所以我在這里免費的嘛，但是所以我講我就啟動把檔案，那我的我剛剛已經這個是設定檔，嘿，我到點SA點，這是private key需要private key更是待會兒就。 \n 10:47 我就把它收組長的賬號下好之後就把這里分別當我失去權啟動動態，然後執行H點PY OK，然後我就有權限了，就這樣里面我一進來就可以把檔案我我，所以後面你就會我們其實就我的動態。 \n 11:17 談到當落到當落我是父母的意思就是留留殘骸。假如你忘是用覆制的哇，你的要麽是在你的，你可以看到，可是我們超很短，當然別人拿走，所以這。 \n 11:47 他只是說他要把我弄爛學校我是做對吧？應該也沒有那麽critical了，我只是想要聊的環境下我是怎麽取得去，怎麽進行協同環境沒有設好自己哦，你圖畫好OK，你的寫的程式控制模擬也沒辦法，所以我們還是得要權限的問題部分一旦完。 \n 12:17 這兩個好，所以我這個上去我已經存好，接下來我就必須我的pooty，我現在要建key基本上，但是這個時候我的必須是O好，所以這個格式就我要對應好對不對？這種呃，pooty建像這個建。 \n 12:46 Key OK，那重要的是private key，因為你有private key，你這是一個基本概念，就可以按一下在這邊滑鼠的這個洞產生以亂數的方式來產生，這把我現在需要的就是要全部扣到C之後。 \n 13:14 對應的這一個組長他的設定下面的對吧？因為他已因為這邊是取不到，我就從這里我就直接告是第2CB205，那我是第二周用的，所以我就把它換句只需要。 \n 13:45 把我起來要存兩一個我是存ppk用的一個，要想就必須要做兩它存起來不想要再找一個啊密碼，所以我是會OK好，所以我。 \n 14:13 好，那我要存在哪里？待會這個要送給，待會要要用連接想辦法送給第一組的啊。所以我這里我就它是CD2024對應DAGY是group，但是它這個就建的啦。 \n 14:42 PPT所以我就把它存起來需要一把對吧？唉，怎麽辦on comperson好，所以我還要TST，所以我這里就轉換字就非常重要。之後轉換你經常在網頁上有沒有動態的檔案轉成我們把markdown的網址。 \n 15:12 變為了往事，你在這里support這個key好，所以這個key它就是IDSA，它同樣我說不要，那我就把它存成RSA編它送上去好，最後這里把它存起來好，不用了，想要采。 \n 15:39 OK，你就再打開它然後這個時候你就載入它，就會秀出它的我。我只要漏選擇這個P，它就會自動產生上最，重要的是ppk OK好，所以現在就可以好那送那它掉吧，我們是。 \n 16:09 我們這里啟動是我們要想辦法把起來，然後我們要把那個檔案上傳，然後執行一下S，OK，所以我看一下他的啊，我們剛剛好像沒有環環境吼有嗎？我們好像，所以是不能跑的，沒關系，我們讓他他給我們的這里你看。 \n 16:39 好，這個勉強好，那他這邊他告訴我說跑的模組啊，我剛剛沒有準備嘛。模組的話我們這里我把它清一下，這樣可以好，就是你上面螢幕這些我已經我就可以在這里啊，change user可以執行，然後。 \n 17:06 把我的環境弄成可以就我這里一樣其實一串模組啊，所以它就會安裝模組。那這里弄好之後，我啟動傳到，然後用SSH點P移移到我那看看是不是我就有權限，哪個版看能在它刪除之前。 \n 17:36 好都能夠動作好，所以我這邊來我應該就可以Run起來我就可以啟動，我有了動態我就能那兩個檔好，所以在這里我應該好那Run的部分只要成功好，我就可以擁有新的那才出來。 \n 18:05 對，再改哈里面我就它的動態啟動，哎，那因為現在沒有，因為那個好，所以我要這個是打上傳它就會跑，所以它會傳到哪里，它download目錄區，所以它會從。 \n 18:35 選擇兩個檔案，所以我跑到我們的這個當存的地方，我就把這兩個檔，這兩個TXT有沒有？我現在要設定這個是里面有包含session，要把這兩個檔案，所以我就，所以它已經。 \n 19:03 你動作要快執行執行這個SS目錄拍成三執行SSH執行應該就搬過去了，應該就搬過去了。好，所以你整個應，嗯啊，就是我們的答案，嗯，那一旦進來這里，你就不用怕了，因為別人就拿不到。 \n 19:33 SH點PY OK。還有還有哪一個要改？因為我剛才我們的叫什麽，可是我們剛剛我們對應的我們對應的協定是HTTP的，所以我這邊必須要把我要去改它的。 \n 20:02 OK好，所以這里最後一啊，看到點git進來才看這個L這邊P你怎麽推都推不回對吧？好，所以假設它改成SSH，然後前面是我的session，後面是我。 \n 20:32 好，可以順利的有機會對吧？這里給他好，所以我來我們在這里加上一個cospape，這里我們幫他看看是不是之後是不是可以死好，所以也就多一頁轉檔那轉了檔不能夠用git版。 \n 21:02 好，所以我們這好，然後我們這里說，所以我們假設現在可他至少還沒有幫我們刪掉他，就是已經就是刪掉了前這個沒有提交哦，因為。 \n 21:31 試著push看看假如不行你就關掉sale sale哦，它不能從這里OK，那我們從我們從這邊基本上連線我們的抗藥權限自己加的好好，然後我問一下那他說你要不去不去看看。 \n 22:01 然後他說你要不要做這樣的一個連接？我說好，一定要回答yes，然後我再因為我把它看一下不行，然後我們。 \n 22:29 把血我們，所以我們要把它移掉我進來，進到可以再上到前面，然後我在我自己在哦。 \n 23:05 再試試，看好這邊再起來然後我再執行SF再找那兩個檔現在現在隨身碟哦，因為這要來這里要執行。 \n 23:36 三時候應該是檔案是在我們的檔查看一下有沒有這兩個好，所以我們趕快把它搬。嗯好問一下face status已經把我。 \n 24:04 你是不行啊，白板啊，要是指定的方式啊，SS12沒有關掉，這樣子其實你刪掉了五分到10分1定它是。 \n 24:35 哎呀好，你待會用這個來網站的話，用這種方式是有點辛苦，那我們還是好影片好，沒有辦法，那我把這個影啊好，所以你只要。 \n', 'tags': '', 'url': 'cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲.html'}, {'title': 'cd2024_2a_w2_1', 'text': '\n \n 影片摘要: \n 這部影片主要講述了在 Replit 平台上建立團隊、分組、設定管理權限以及進行程式開發的流程。具體內容如下： \n \n \n 計劃中的團隊建立： \n \n 每個組需要有明確的識別信息，包括組名、組長名稱、Github 帳號等。 \n 使用 Replit 平台創建團隊時，組員需要選擇正確的組別並加入相應的團隊。 \n \n \n \n 組長的操作： \n \n 組長可以使用 SSH 方式添加管理權限，這需要對 Github 帳號和程式碼倉庫進行設定。 \n 在 Replit 使用者界面，組長可以方便地管理團隊，包括建立分組作業、管理團隊成員、設定權限等。 \n \n \n \n 程式開發流程： \n \n 進入程式碼倉庫後，可以進行靜態部署（如編輯 HTML、CSS 檔案）和動態部署（使用 Python 進行開發）。 \n 提交程式碼時，可以使用 Git 的相關指令（如 git add、git commit、git push）進行管理，確保程式碼的同步和版本控制。 \n 注意容量限制和運行時間，避免超出限制造成開發困難。 \n \n \n \n \n 00:03:01 - 00:03:25 如 00:04:11 - 00:06:15 我們假如來看這 00:07:16 - 00:09:13 上面的這個規劃的 00:10:01 - 00:13:07 一下每一組都要知道他的這一 00:14:16 - 00:16:02 組別的團隊 00:17:06 - 00:18:28 現在用的這個其中 00:20:07 - 00:22:01 稱呢叫做2A嗎對不對 00:23:08 - 00:24:17 以第一組 00:25:07 - 00:26:21 n我 00:27:13 - 00:29:17 建立這個me turn MI 00:30:08 - 00:32:23 然後我們是A8A 00:33:11 - 00:35:04 然後是group one 00:36:10 - 00:37:17 一旦假如 00:38:12 - 00:39:22 待會團隊建 00:40:10 - 00:41:28 你也拿到這個 00:42:14 - 00:43:11 你就join 00:44:16 - 00:46:11 所以假如是第二組的 00:47:28 - 00:48:22 建立自 00:50:14 - 00:53:10 第二叫MIMID 00:54:14 - 00:55:21 da 00:56:20 - 00:57:14 2 00:58:17 - 00:59:20 好一直到七 01:00:19 - 01:01:27 八這樣下去 01:01:27 - 01:03:04 好所以這裡就是 01:03:28 - 01:05:19 規定好的這個 01:07:10 - 01:09:07 好所以我現在就是 01:09:22 - 01:12:22 換到第一組組長的github賬號 01:13:22 - 01:15:12 很好OK 01:15:12 - 01:16:19 這個是他的賬號 01:17:23 - 01:19:02 到這個 01:19:26 - 01:22:04 建立2A的這個分組作業 01:22:26 - 01:23:26 點進來 01:23:26 - 01:27:01 就可以直接進入 01:28:16 - 01:30:05 他的這個部分我的 01:30:25 - 01:32:11 這個示範的 01:32:26 - 01:34:14 啊那你你不要加入 01:34:29 - 01:36:14 不能再加入其他 01:37:04 - 01:39:14 OK好所以我這邊我叫 01:40:04 - 01:45:26 組長嗎dag one你 01:47:00 - 01:47:00 MID然後是然後是ag1 01:52:04 - 01:53:27 好所以我這樣子的話 01:56:12 - 01:59:22 假如剛剛那個連結啊我第一組的組員 02:00:01 - 02:02:20 點進來之後啊他就選擇 02:03:19 - 02:03:19 哦那你不要加錯組了你就是第一組的組員才加入 02:07:08 - 02:10:08 那我們是MId甲班 02:10:28 - 02:12:25 group one好就 02:13:24 - 02:15:21 好那create這個team之後 02:17:10 - 02:18:28 我使用者只要接 02:19:12 - 02:20:21 他基本上就會 02:21:16 - 02:22:21 的管理權 02:22:25 - 02:24:21 那我們昨天在乙班 02:25:13 - 02:27:22 那個倉儲啊是空的倉儲 02:28:19 -02:29:28 啊那我們看 02:30:14 - 02:32:19 看拿到的倉儲好像我們是7 02:33:22 - 02:37:09 倉儲好像是空的但是這個我不是等一下 02:38:20 - 02:41:04 哦所以他拿到之後啊還好 02:42:10 - 02:43:29 這個先樂後苦 \n 先苦後樂 \n 所以你講 \n 要怎麼從零開始的話 \n 後面再來 \n 用這個期末專案的時候再來 \n 乙班昨天拿到 \n template \n 什麼啊我們這個就直接複製對 \n 這個進來之後啊因為我是以 \n 我們甲班第一組 \n 我已經有管理權 \n 可是我那個前面 \n 我們的期中 \n 名稱 \n 後面這個就是第一組組長建 \n 所以這個就是對 \n 倉儲OK \n 還沒有起來 \n 所以組長的話 \n 當然也可以交代 \n 進入這個 \n 好然後我就可以進入 \n 進入這個主分支 \n 然後我把它 \n 啊所以這個就比昨天乙班 \n 你在這邊的話只需 \n 我啟動跟他pages \n 可以把它弄起來 \n 把它弄起來之後啊其實 \n 可以接著來做所謂code \n OK因為在這個code底 \n 的話我以管理 \n 每一個主人都有 \n 所以我只需要點code \n 看到這邊啊他的 \n 一個codespaces \n OK所以你在 \n 對任何一個倉儲其實都可以點 \n creat那creat他就會跳到這個 \n 的環境啊那這邊的話就是給你的資源相對就比較多了 \n 許多的終端機 \n 所以我們就不需要在像 \n 共用443然後在那邊切 \n 不用他這邊可以兩個同時起來我起來把它啟動給你 \n 這邊的意思就是說你必須要等他 \n 哎他所以靜態他應該有了 \n 只需要進到這裡面 \n 所以我從這裡點 \n 已經OK了就跟我們個人 \n 只不過他是登 \n 所以你假如說 \n 反他的話 \n OK \n 因為你已經沒有辦法直接用a com去設定許可權 \n 上許可權吶不會跑到這個 \n 你雖然擁有這個賬號的許可權啊這個倉儲的 \n 但是他是登記在這個MD24 \n 所以我們的做法是把它 \n 我們用SSH \n 也就是點SSH的方式我們把key的部分放進來 \n 還是可以拿到許可權在replit \n 可是在replit \n 用起來刪掉你的這個點SSH就 \n 不是方法 \n 可是你假如是在這裡面就 \n 我們要啟動這個動態的話我們只需要 \n 加上因為我們現在要安裝模組 \n 把模組裝起來所以這個呢 \n 終端機他 \n 端機 \n 之後啊你就利用 \n 我们去改变模式 \n 被使用者 \n 加上執行 \n 然后是哪一个档呢是init \n replit好那只要 \n 之后啊我们就可以直接 \n 然后他就会帮我们把 \n 给安装好那这个时候你就可以感受到他给我们的两个code啊 \n 大的这个记忆体啊他速度也比较快一点 \n OK已经好了所以这个时候啊我们 \n 发现我们没有run了对不对 \n 设定了所以你必须要自己 \n python3 main.py \n 我的意思就是说我现在要 \n 我的main.py \n 你伺服 \n init的網址跟 \n 啊所以这个部分你只要按这个 \n 会执行动态的 \n 告诉你说 \n 利用8080 \n 用浏览器开启 \n 按到你的 \n 所以这个时候 \n 因为他这个也是乱码 \n 所以我们也不用去管ADMIN \n 别人会进来因为别人根本不晓得 \n 是用什么所以同样的我们就用admin进来 \n 哎好了进来之后 \n 你就可以直接点这个然后告诉他说我是MId1 \n 哎分组 \n 好然后我是send \n 我在这里面我就convert \n 然后你回来的话也也没有 \n 所以你这个终端机现在我没有在背后执行 \n 你就跑到他的menu这里 \n 然后他就有 \n 你要开启 \n 正常就是一个月120个core \n core是小時 \n 时间就要争取 \n 我就打开一个新 \n 好所以你透过这个menu你 \n 我可以 \n 那我新增这个終端機 \n 这个时候我是 \n push对吧 \n 这就在执行 \n 这个我现在要执行 \n 所以我就git add \n 哎我在git commit \n 告诉他说我是已经 \n 把 \n 开头哎那应该是 \n 网页网页的标题 \n 问了啊好所以我这个时候我就commit \n 然后你会发现说github \n 因为他就是github账号 \n 前面有权限的问题 \n 直接就推了连设定也不用 \n 他已经在转档 \n 你只要回头 \n 在这个对 \n 档 \n 那么在哪里转档 \n 在 \n 转档他已经在转档 \n 提交已经跑到这里来哎那我 \n 静态怎么办 \n 好那启动静态假如 \n 这个终端机你是在启动 \n 通常我们会在三 \n OK所以现在是三个所以这个是让你a commit push \n 那这个我想要 \n 静态啊那静态啊因为这里有python \n 我python3 \n 模组 \n server \n 的意思就是说 \n 这边就 \n 所以我用python3啊 \n 表示模组 \n 因为python3他是内建HTTP \n 哎那我们在replit \n 这样做因为他不行啊因为他 \n 啊那在这里就可以因为他给 \n 所以我们现在 \n 他都不管你 \n 他都开 \n 下去的时候他又启动 \n git pull好 \n 那你这里打开就是静态 \n 然后呢那就很方便 \n 打开这里就静态 \n 好那只是说 \n 你要来编辑 \n 我们当然不会在这里但会 \n 我在这里然后 \n 半天 \n 然后用的 \n 算秒的对不对 \n 这 \n 不会在这里 \n 你看我要赶快把它 \n 啊我就跳到这边来我下哎 \n 一秒一秒过去 \n 对 \n 我就直接跳到这里 \n 那要关掉它有两个地方一个 \n 首先从这里把它关掉因为我已经不要 \n OK那关掉他就不不去 \n 死了 \n 他应该就关掉了 \n 对我已经把我的codespace是关掉哎 \n 關掉 \n 再按一下 \n 哦他要让他執行 \n 只是启动3个 \n 好所以我 \n 关掉 \n 你看到他的地方啊就是 \n github在 \n 你直接打codespace \n 哎他就会看到我已经 \n 第一组组长的账号 \n 啊你按他他基本上 \n 那现在他给你的 \n 两个core \n 大方给你8RAM 8gb \n 是你的容量我那容量我们刚 \n 看到他是允许总容量 \n 量是15好所以我们刚刚可能用的 \n 好所以他基本上 \n 两个小时 \n 会启动 \n 计时的 \n 那么容量啊我们来编辑 \n 哎我们就 \n 你就直接跑到每一个人登 \n 工作他是不算是 \n 点这个 \n OK那在这里做你另外 \n 转档提交哎在 \n 提交呢那你 \n 可以啊你在这边你想要 \n 的答案 \n 改名也可以 \n 好那你 \n 看好之后 \n 然后你再想办法跑到codespace \n 是你回到re \n replit因为 \n 他也 \n 好 \n 影片我们再来 \n 那我假如把 \n 对应的 \n 刚刚设定的这个分组 \n 丢到这里之后啊我到底要 \n 我到底应该要怎么样来 \n 的权限OK好所以我们这个影片就 \n 这边然后待会 \n 这个 \n 组的 \n 在我们的 \n 团队里面好所以我们先把 \n', 'tags': '', 'url': 'cd2024_2a_w2_1.html'}, {'title': '2a w6 教學影片任務', 'text': '', 'tags': '', 'url': '2a w6 教學影片任務.html'}, {'title': 'cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 noise reduced', 'text': '\n 1 00:00:00,512 --> 00:00:02,816 那我因為對他有管理權 \n 2 00:00:03,072 --> 00:00:06,400 我想要把所有的這些都更新為最新我要怎麼做 \n 3 00:00:06,912 --> 00:00:08,960 好那我選一條最簡單的路的啦 \n 4 00:00:09,472 --> 00:00:13,312 我就從後的這邊我啟動coser為什麼選這個 \n 5 00:00:13,568 --> 00:00:15,104 因為我不需要 \n 6 00:00:15,616 --> 00:00:17,664 額外的設定管理權限 \n 7 00:00:18,432 --> 00:00:19,968 我直接從這裡我就可以進 \n 8 00:00:23,040 --> 00:00:23,808 看不到啦 \n 9 00:00:30,464 --> 00:00:31,744 好所以我把這個 \n 10 00:00:34,560 --> 00:00:38,400 好所以我就把這個利用他的這一個 \n 11 00:00:38,912 --> 00:00:41,216 Costco直接進來可是 \n 12 00:00:41,472 --> 00:00:43,264 直接進來的時候你會發現啊 \n 13 00:00:44,032 --> 00:00:46,336 他不會直接幫你啊 \n 14 00:00:46,848 --> 00:00:48,640 所以昨天我們在一班 \n 15 00:00:49,152 --> 00:00:52,224 他就是想要用我們的這個網子來整合 \n 16 00:00:52,992 --> 00:00:53,504 OK \n 17 00:00:55,552 --> 00:00:59,904 沒辦法做到因為這裡這裡是空的所以你等一下就知道他的紙模組 \n 18 00:01:00,160 --> 00:01:01,440 是沒有抓下來要怎麼辦 \n 19 00:01:02,464 --> 00:01:03,232 下指令 \n 20 00:01:03,488 --> 00:01:04,512 所以我們要 \n 21 00:01:06,304 --> 00:01:07,072 Major \n 22 00:01:07,584 --> 00:01:08,352 我沒有阿伯 \n 23 00:01:11,424 --> 00:01:12,704 好那這邊幫我 \n 24 00:01:14,752 --> 00:01:15,776 我想要給 \n 25 00:01:16,288 --> 00:01:18,848 這邊就有一些他內建了 \n 26 00:01:22,432 --> 00:01:23,968 我看了他關掉 \n 27 00:01:25,760 --> 00:01:31,904 然後i n e t那個部分就說你要查 \n 28 00:01:32,160 --> 00:01:38,304 你把它丟到我們的這一個搜尋上面來看 \n 29 00:01:38,560 --> 00:01:41,376 然後他就會 \n 30 00:01:41,632 --> 00:01:44,704 告訴你說講我們這個再有紙模組的話 \n 31 00:01:45,472 --> 00:01:47,008 已下橋再怎麼煮 \n 32 00:01:47,264 --> 00:01:48,544 有沒有他就是 \n 33 00:01:48,800 --> 00:01:50,336 可能要再加一個request \n 34 00:01:53,664 --> 00:01:57,504 所以你假如假如我們這邊就留記錄下來 \n 35 00:01:58,528 --> 00:02:03,136 就是你有可能是模組裡面還有紙模組不要說你假如每一個人的 \n 36 00:02:04,160 --> 00:02:04,672 分組 \n 37 00:02:05,440 --> 00:02:10,048 底下的這一個個人的倉儲啊也是有紙模組的話 \n 38 00:02:10,304 --> 00:02:12,096 你就要加這個或是他只 \n 39 00:02:12,608 --> 00:02:14,912 會抓一層的這個紙模組 \n 40 00:02:15,680 --> 00:02:18,240 理論上沒有 \n 41 00:02:19,008 --> 00:02:20,544 我們就直接 \n 42 00:02:20,800 --> 00:02:21,568 利用這個 \n 43 00:02:22,848 --> 00:02:24,128 一打麻將 \n 44 00:02:27,200 --> 00:02:28,992 然後把它按那個他就會 \n 45 00:02:29,248 --> 00:02:30,528 主意的幫我們吧 \n 46 00:02:30,784 --> 00:02:32,064 怎麼組裝下來了嗎 \n 47 00:02:35,136 --> 00:02:37,952 假設我們現在要更新這個56號的 \n 48 00:02:38,464 --> 00:02:43,072 這邊抓完之後我們再看我們準備要把它分為不一定要跟為最新 \n 49 00:02:43,328 --> 00:02:45,120 其實應該是由他主動 \n 50 00:02:46,144 --> 00:02:49,984 因為我不曉得他裡面的這個資料啊他要不要更為最新 \n 51 00:02:51,008 --> 00:02:52,032 參與 \n 52 00:02:52,544 --> 00:02:55,360 我們分組的這個網誌好了 \n 53 00:02:55,872 --> 00:02:58,432 所以我們是多少我們現在 \n 54 00:03:00,736 --> 00:03:02,272 我們現在是 \n 55 00:03:02,784 --> 00:03:04,320 全部都打開了 \n 56 00:03:04,832 --> 00:03:08,416 我們就直接把56號4102 3156 \n 57 00:03:08,928 --> 00:03:10,720 好所以你要怎麼樣啊對他 \n 58 00:03:10,976 --> 00:03:11,744 你要跟 \n 59 00:03:12,768 --> 00:03:14,816 更換目錄到4102 \n 60 00:03:16,096 --> 00:03:16,864 3156 \n 61 00:03:18,400 --> 00:03:22,752 你就是你要換到他的所以他現在已經根據我們上面登記的 \n 62 00:03:23,520 --> 00:03:25,824 紙模組內容把我們抓下來所以我 \n 63 00:03:26,080 --> 00:03:26,848 更新 \n 64 00:03:27,104 --> 00:03:28,128 之後啊我就 \n 65 00:03:28,384 --> 00:03:30,432 更換目錄到這個怎麼走 \n 66 00:03:31,200 --> 00:03:32,480 然後我要去 \n 67 00:03:32,992 --> 00:03:33,760 Origin \n 68 00:03:35,808 --> 00:03:36,320 然後 \n 69 00:03:36,576 --> 00:03:37,600 這邊是麵 \n 70 00:03:38,112 --> 00:03:39,136 腳按照我們 \n 71 00:03:39,904 --> 00:03:42,208 連線的設定的話我進入 \n 72 00:03:42,976 --> 00:03:44,512 其中的一個紙模組目錄 \n 73 00:03:45,024 --> 00:03:47,840 然後我用Duo抓出他最新的資料 \n 74 00:03:48,352 --> 00:03:51,168 他這裡應該理論上不會有合併的問題因為 \n 75 00:03:51,680 --> 00:03:55,008 他這個只有他自己能夠更新嗎除非你還有其他 \n 76 00:03:55,264 --> 00:03:56,800 其他人參與血統 \n 77 00:03:57,312 --> 00:03:59,360 圖片那我們現在沒有就是 \n 78 00:03:59,616 --> 00:04:03,456 他在他的課程王子 \n 79 00:04:03,712 --> 00:04:06,272 課程的倉儲設定的那個連結 \n 80 00:04:07,552 --> 00:04:10,624 然後我們要求要抓下他的 \n 81 00:04:10,880 --> 00:04:11,648 九份子 \n 82 00:04:13,184 --> 00:04:17,791 我們就直接把他對他這個就最新最新之後假如 \n 83 00:04:18,815 --> 00:04:20,095 我們這個就要 \n 84 00:04:20,351 --> 00:04:22,655 做改版的動作你可以先問一下 \n 85 00:04:23,679 --> 00:04:26,239 因為你在處理的過程說不定有人 \n 86 00:04:27,263 --> 00:04:28,287 會有更新嗎 \n 87 00:04:28,543 --> 00:04:30,847 所以你講每一個人都推到 \n 88 00:04:31,103 --> 00:04:32,639 倉儲的話是蠻累 \n 89 00:04:34,175 --> 00:04:36,735 他想要保全他就把資料丟到分組 \n 90 00:04:36,991 --> 00:04:39,295 欸我在我的時候我就要合併一 \n 91 00:04:39,807 --> 00:04:42,367 所以比較好的狀況應該是每一個人 \n 92 00:04:42,623 --> 00:04:45,695 暫時先推到他自己的分支上 \n 93 00:04:46,207 --> 00:04:47,743 等到告一段落 \n 94 00:04:49,023 --> 00:04:51,327 跟主任是合併這個我們待會再來看 \n 95 00:04:51,583 --> 00:04:53,631 好睡覺是這樣的話我就 \n 96 00:04:54,911 --> 00:04:55,679 我就comm \n 97 00:04:57,727 --> 00:04:59,263 然後我就說我阿貝了 \n 98 00:04:59,519 --> 00:05:05,663 多少剛才是410410 \n 99 00:05:05,919 --> 00:05:12,063 2356指 \n 100 00:05:12,319 --> 00:05:18,463 那你這樣說明一下你不能你這邊講我沒有一個合理的一個說明自創啊 \n 101 00:05:18,719 --> 00:05:24,863 我要進去看他比對半天 \n 102 00:05:25,119 --> 00:05:31,263 我更新了這個紙模組OK啦 \n 103 00:05:31,519 --> 00:05:37,663 你再回頭去看他的時候理論上這邊應該就是 \n 104 00:05:37,919 --> 00:05:44,063 他這個應該就是最新了所以他3個禮拜前就是最 \n 105 00:05:50,719 --> 00:05:56,863 對啊他就是11個禮拜吃一次 \n 106 00:05:57,119 --> 00:06:03,263 那為什麼我們沒有辦法看 \n 107 00:06:03,519 --> 00:06:09,663 幫我設這裡他March因為我剛剛那個怎麼沒有怪 \n 108 00:06:16,319 --> 00:06:22,463 因為你要複習之後你才能過來 \n 109 00:06:22,719 --> 00:06:28,863 過來說你在看他應該就是最新了他這個 \n 110 00:06:29,119 --> 00:06:35,263 那他不見了這個要有這個 \n 111 00:06:35,519 --> 00:06:41,663 決定因為其中會有他的這個馬達所以你們這裡要溝通一下喔 \n 112 00:06:41,919 --> 00:06:48,063 你待會講我們第二個影片要把大家的這個網站集中在分組的 \n 113 00:06:48,319 --> 00:06:53,951 等你的時候你不能用你不能用這個這個當作名稱啊 \n 114 00:06:54,207 --> 00:06:56,767 因為大家講我都叫日期的話會幹掉 \n 115 00:06:57,023 --> 00:06:58,815 所以你一方面前面要加上 \n 116 00:06:59,327 --> 00:07:00,095 你的學號 \n 117 00:07:00,607 --> 00:07:01,375 後面啦 \n 118 00:07:01,631 --> 00:07:03,167 你可以自己用 \n 119 00:07:03,679 --> 00:07:07,519 把這一個那麼特定的當然用日期不是不好 \n 120 00:07:08,287 --> 00:07:11,615 通常你要有意義的字會比較好這樣是第幾週 \n 121 00:07:12,639 --> 00:07:14,943 他甚至你進來的這個檔案啊 \n 122 00:07:15,199 --> 00:07:17,503 你轉檔轉檔完的這 \n 123 00:07:19,295 --> 00:07:20,063 你也要 \n 124 00:07:20,319 --> 00:07:23,647 跟其他的人協同一下因為你協同最主要的 \n 125 00:07:24,415 --> 00:07:25,951 這個是要 \n 126 00:07:26,207 --> 00:07:28,511 因為我沒有對他這個沒有權限 \n 127 00:07:28,767 --> 00:07:33,119 因為他變成最後的這個也必須要掛上他自己的寫好 \n 128 00:07:34,655 --> 00:07:37,727 因為最後轉出來的也有微信 \n 129 00:07:38,495 --> 00:07:39,775 所以你跟人家協同 \n 130 00:07:44,383 --> 00:07:45,919 那你不守規矩的話 \n 131 00:07:46,687 --> 00:07:48,735 你好棒欸我就接不到啦 \n 132 00:07:49,503 --> 00:07:51,039 跑去這裡面我們會希望說 \n 133 00:07:51,807 --> 00:07:55,647 你們待會各組啊那你在討論的時候要不要開會啊 \n 134 00:07:56,415 --> 00:07:57,439 要開會啊 \n 135 00:07:59,231 --> 00:08:01,535 所以你開會你可以用obs開啊 \n 136 00:08:02,559 --> 00:08:05,631 有沒有你可以obs可以用線上的這個工具來開 \n 137 00:08:06,143 --> 00:08:09,215 開會的時候你就留紀錄所以我們講的 \n 138 00:08:09,471 --> 00:08:11,519 逐字稿你整理出來影片也有 \n 139 00:08:11,775 --> 00:08:13,823 我們就可以很清楚了看到 \n 140 00:08:14,079 --> 00:08:18,687 那麼你說完成了我就想這個應該每一組你只要到現在還不會的話 \n 141 00:08:18,943 --> 00:08:20,223 我們就透過這一個 \n 142 00:08:20,735 --> 00:08:21,503 然後 \n 143 00:08:21,759 --> 00:08:23,295 我們是從最前面的 \n 144 00:08:23,807 --> 00:08:24,575 我們跟你 \n 145 00:08:24,831 --> 00:08:26,367 掃描看一下他的指令 \n 146 00:08:27,647 --> 00:08:29,695 我們就更換這個目錄進來對不對 \n 147 00:08:30,975 --> 00:08:37,119 然後在那個目錄下我們就不了然後記得要再回你的 \n 148 00:08:37,375 --> 00:08:43,519 分組倉儲 \n', 'tags': '', 'url': 'cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 noise reduced.html'}, {'title': '每周課程進度', 'text': '', 'tags': '', 'url': '每周課程進度.html'}, {'title': 'w1', 'text': '內容管理系統 \n 使用者可以自行利用 \xa0 cmsimde_site \xa0 倉儲作為 Template, 建立自己的網站內容管理系統. \n 引用網站網址連結的方法: \n cmsimde_site \xa0 - 在文章中多次引用同一個網站連結時, 可以使用此種方法. \n https://github.com/mdecycu/cmsimde_site \xa0 - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. \n cmsimde_site \xa0 - 也可以使用 Markdown 的標準網站連結使用格式. \n # 引用 Python 程式的方法\nfor i in range(10):\n    print(i, "列出字串") \n 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '利用 Github Classroom 指定分組倉儲：解釋如何通過 Github Classroom 獲取協同分組倉儲，以及如何將這些倉儲導入到 Replit 或其他環境中進行維護。 \n 使用 SSH 配置 Replit 管理分組倉儲：說明使用 ssh-keygen 工具創建 SSH 密鑰對，並將公鑰添加到 Github 中，同時配置本地的 SSH 連接方式以便在 Replit 中管理分組倉儲。 \n 建立 Team 和倉儲：指導甲班第一組組長如何在 Github 上建立名為 midag1 的 Team，並將組員加入，同時建立期中協同倉儲和報告網站。 \n 利用 Codespaces 管理倉儲：說明如何使用 Github Codespaces 對倉儲進行維護，包括在需要時啟用 Codespaces 以節省免費核心小時。 \n 近端維護網站：介紹如何使用本地可攜系統（例如 portable_2024）來維護分組網站，以及在本地執行動態網站的方法。 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '期中分組倉儲與網站的列出，並使用 Brython 程式語法直接在網頁中列出特定連結內容，其中包括不同組別的期中報告倉儲與網站連結。 \n 期中協同分組報告的製作流程，包括將組員個人倉儲設為分組倉儲的子模組、將組員個人倉儲納入分組倉儲成為子模組、在 Replit 中維護分組倉儲等步驟。 \n 使用 Github Codespaces、Gitpod 進行維護倉儲與網站的說明，包括如何在 Gitpod 中管理個人網站和分組網站、如何設定雙重認證、如何將組員的個人倉儲設為分組倉儲的子模組等。 \n LaTeX 轉 PDF 機制的使用方法，包括利用 miktex-portable 進行 LaTeX 編譯、使用 Github Actions 執行轉檔、使用可攜程式編譯 LaTeX 等相關說明。 \n 提供了關於 TeX 與 LaTeX 的基本說明，包括 TeX 的應用和 LaTeX 的工作原理。 \n 設定網誌系統的說明，包括使用 Pelican 網誌系統建立個人網站、編輯網站內容等步驟。 \n 提供了有關 OnShape、CoppeliaSim 的帳號設定和應用說明，以及模型簡化過程的注意事項。 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '協同產品設計實習的第四週任務： 在第四週，各分組需要明確界定任務需求和分工時序。隨著協同設計流程的進行，分組倉儲和網站的改版變得更加複雜。這時可以導入SourceTree來協助各組員更清楚地看到倉儲改版歷程，同時應用Git Branch也能減少各學員在階段性改版內容完成之前推向Github分組倉儲的合併次數。 \n 教學影片分組整理並自評： 各組需要搜尋已經發布的教學影片，填上字幕並上傳到可以嵌入到各分組網站的地方。同時需要從影片字幕中整理出逐字稿，放在影片下方以.txt格式提供連結。並在嵌入的教學影片下方，以摘要方式說明該影片的教學重點。 \n Github個人與分組倉儲的維護方式： 個人的倉儲名稱為cd2024，分組倉儲位於mdecd2024帳號下，以2a開頭，加上"-"之後再補上midag + 組別。各組員的cd2024個人倉儲必須設為各分組倉儲的子模組，目的是讓各組員可以自行管理並維護自己的課程倉儲，並決定要引入分組倉儲的內容版次。 \n 四種介紹的倉儲維護方式： 這段文字介紹了四種不同的倉儲維護方式，包括Replit、Codespaces、Gitpod和localhost。它們各自有不同的特點和使用方式，可以根據實際需求來選擇最適合的方式來進行倉儲維護。 \n 使用NX1872協同繪製零組件： 這部分介紹了如何使用不同版本的NX來進行繪製工作，並提供了相應的啟動指令和說明。 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': 'SSH 設定管理分組倉儲的權限 \n 在 Replit 上使用 SSH 設定來管理分組倉儲的權限，這是為了確保組員可以正確訪問和管理倉儲中的內容。 ODOO PLM 論文中英並列任務 \n 要求各組員在個人的倉儲中以 LaTeX 格式進行分工，完成關於 ODOO PLM 的論文的中英文翻譯。最後在分組網站上的 Release 或 downloads 區完成 2a-midagx_report.pdf 的製作。 教學影片分組整理並自評 \n 要求各組自行搜尋並整理之前已發布的教學影片，包括字幕、逐字稿以及教學重點摘要，並上傳到分組的網站上。 統整組員子模組中的協同設計網誌 \n 教授如何將各組員的協同設計網誌文章放在個別的倉儲的 markdown 目錄中，並透過 Pelican 設定在分組倉儲中統整所有組員的網誌內容。 利用 NX1872 協同繪製零組件 \n 提供了從電腦輔助設計室中取得 NX 套件目錄檔案的方法，並介紹了如何利用不同版本的 NX 執行繪圖以進行協同設計。 Sourcetree \n 教授使用 Sourcetree 工具來清楚查看倉儲的歷次提交內容，以及如何回復到先前的任一版本內容。 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '探索協同產品設計實習的第六週：NX 零組件繪圖與 CoppeliaSim 場景模擬 \n 概述協同產品設計實習的第六週內容。 瞭解如何進行協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式。 NX 零組件繪圖 \n 解釋如何使用 NX 進行零組件繪圖。 探討與繪圖相關的檔案格式，例如 .prt、.asm、.dxf 等。 CoppeliaSim 場景模擬 \n 介紹 CoppeliaSim 的基本功能和操作。 分析與模擬相關的檔案格式，例如 .ttt、.lua 等。 影片教學問題 \n 討論影片教學的效果與問題。 提出重新錄製影片的可能性。 Github Actions 設定 \n 分析帶有子模組的 main.yml 設定，並討論其作用。 探討如何加入取子模組內容的 main.yml 設定。 LaTeX 範例報告更新 \n 深入探討 2b-midbg4 組的範例報告第一章。 解析報告中的 LaTeX 檔案來源和圖片檔案設定。 倉儲更新與維護 \n 更新分組倉儲中的內容和子模組。 討論如何從倉儲中取下子模組，以及更新學員倉儲內容。 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w8', 'text': '2024 Spring 網際內容管理與協同產品設計實習課程教學導引. \n 課程概要：這是一門協同產品設計實習課程，學員使用網際內容管理系統（CMS），採用Github Classroom建立分組倉儲，使用Python執行網頁編輯，並將其轉換為靜態網頁，以利用Github Pages呈現產品設計過程相關內容。 網頁編輯工具：學員可以選擇使用Replit、Codespaces、Gitpod或本地主機進行網頁編輯，根據各自喜好與環境選擇。 協同模式：學員可以透過不同的協同模式，包括網站內容、報告內容、產品設計、零組件設計、模擬場景設計和專案簡報設計，進行協同工作。 具體協同內容： 分組網站內容的協同 分組報告內容的協同 分組產品設計的PLM協同 分組零組件設計的協同 分組模擬場景設計的協同 分組專案簡報設計的協同 導入AI的流程：在課程中還探討了使用ChatGPT 3.5和Gemini Pro對話來獲得進階參考意見的可能性，並將此納入課程內容。 這些內容顯示了一個非常全面的課程架構，學生將在這個課程中學到許多與實際產品設計相關的技能和知識。 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '\n 2024 Spring 網際內容管理與協同產品設計實習課程教學導引. \n 在這個專案中，我們將透過 ChatGPT、Gemini 1.5 Pro 和 Claude 3 的協助，進行協同產品設計實習。以下是我們的工作步驟： \n 協同資料處理 首先，我們需要處理兩個 CSV 檔案：2a_cd2024_midterm.csv 和 2b_cd2024_midterm.csv。這些檔案包含了學號、Github 帳號和組別等資訊。我們的目標是將這些資料映射到各組別的成員與分組網站上。 \n 使用 Python 的 pandas 庫來讀取和處理 CSV 檔案。 確保每個檔案都有相同的結構，以便進行合併或處理。 對於每個組別，整理成員的資訊並建立相應的連結。 確認連結的正確性，可能需要手動檢查一些資料以確保準確性。 鋼球平衡台 PID 控制與模擬 我們需要下載 cd2024_ball_balancing_platform_control_ref.7z 檔案，並閱讀其內容。然後，將摘要內容放入個人與分組網誌中。 \n 使用 Python 控制 CoppeliaSim 鋼球平衡台 我們需要使用 Python 控制程式來控制 CoppeliaSim 中的鋼球平衡台。以下是控制程式的基本步驟： \n 導入所需的模組，包括 pyzmq、matplotlib 等。 通過 ZMQ RemoteAPI 連接到 CoppeliaSim 的場景伺服器。 設定 PID 控制器的參數。 啟動模擬並開始控制鋼球的移動。 以固定時間間隔更新控制信號，並將鋼球的位置記錄下來。 在模擬結束後，使用 matplotlib 將鋼球在平衡台上的 x 和 y 座標繪製成圖表。 控制模擬參考資料 我們還提供了其他控制模擬的參考資料，包括 ball_beam_balancing_PID_control_coppeliasim_1d_and_2d_cd2024_w9.7z。這些資料可供參考並進一步理解控制策略和實現細節。 \n 鋼球平衡台模擬控制實驗 最後，我們需要下載 cd2024_w10.7z 檔案，並在 CoppeliaSim 中運行該場景。我們將錄製模擬過程的影片並撰寫操作心得，以便記錄我們的實際操作和體驗。 \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '2024 Spring 網際內容管理與協同產品設計實習課程教學導引. \n 協同產品設計實習第十週實習操作 \n 這一週的實習任務將會利用 ChatGPT、Gemini 1.5 Pro 和 Claude 3 來進行。 \n 任務一: 建立學員倉儲與網站連結 我們將使用 Replit 來維護分組倉儲，並且建立各班學員的倉儲、網站與分組連結。以下是我們的步驟： 將 2b.txt 中的資料即時取出，並逐一放入數列。 透過 for 迴圈，從上述資料中提取每位學員的基本資料（學號、Github 帳號與組別），並在網頁建立所需的 HTML。 使用以下連結模板來建立學員倉儲與網站連結： 學員倉儲連結模板: https://github.com/學員帳號/cd2024 學員網站連結模板: https://學員帳號.github.io/cd2024 2b 分組倉儲連結模板: https://github.com/mdecd2024/2b-midbg組別 2a 分組倉儲連結模板: https://github.com/mdecd2024/2a-midag組別 最後，列出 2b 各學員評分相關網站。 任務二: 鋼球平衡台 PID 控制與模擬 我們需要閱讀 cd2024_ball_balancing_platform_control_ref.7z 檔案中的論文摘要，並將其放入個人與分組網誌中。以下是我們對每篇論文的摘要： \n （論文摘要略） \n 接下來，我們需要從 ball_beam_balancing_PID_control_coppeliasim_1d_and_2d_cd2024_w9.7z 檔案中獲取資料，並在 CoppeliaSim 中模擬鋼球平衡台的運動。我們將設定不同的 PID 控制參數，並記錄鋼球的 x 和 y 座標運動路徑圖，以便進行比較分析。 \n 任務三: 鋼球平衡台零組件繪圖 根據 Solvespace_model_2d_for_cd2024_w6.7z 中的零組件尺寸，我們將使用 Siemens NX1872 來執行零組件繪圖。完成後，我們將製作過程影片並放入個人與分組網站中。 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '協同產品設計實習第十一週實習操作 \n 任務目標： 利用 Siemens NX 1872 繪製鋼球平衡台所需的零組件，並將過程影片放入個人與分組網站中。 \n 操作步驟： \n \n \n 準備工作： \n \n 下載並安裝 Siemens NX 1872 至個人隨身碟或電腦（包括筆記型電腦）。 \n 確保連網並取得認證，以開啟 NX 1872。 \n 確認 CoppeliaSim 版本為 4.5.1 版。 \n \n \n \n 零組件繪圖： \n \n 根據 Solvespace_model_2d_for_cd2024_w6.7z 提供的零組件尺寸資料，在 NX 1872 中進行零組件的繪製。 \n 遵循 NX 的草圖建構、參數選用及長出特徵等操作步驟完成零組件繪圖。 \n \n \n \n 影片製作： \n \n 在繪製零組件的過程中，錄製操作影片。 \n 影片應清晰顯示每個步驟以及相關操作介面。 \n 影片長度應足夠涵蓋整個繪圖過程，並以可理解的語言進行解說。 \n \n \n \n 影片上傳： \n \n 將製作完成的影片上傳至個人與分組網站中。 \n 確保影片的存取權限設置正確，以便其他學員能夠觀看。 \n \n \n \n 個人與分組網站更新： \n \n 在個人與分組網站中，新增相應的頁面或區塊，將本週實習操作的影片嵌入其中。 \n 確保網站界面整潔清晰，便於其他學員查閱。 \n \n \n \n 注意事項： \n \n 在操作過程中，注意保持檔案結構的清晰度，便於後續版本管理及協同作業。 \n 確保使用 NX 1872 的過程中遵守授權條款，避免版權問題。 \n 影片製作時應注意口語表達清晰，避免引起學員理解上的困惑。 \n 如有任何操作或技術問題，可及時向導師或教務處尋求協助。 \n \n 學習目標： \n \n 熟練使用 Siemens NX 1872 進行零組件繪製。 \n 掌握錄製操作影片的技巧，能夠清晰有效地展示操作過程。 \n 提升團隊協作能力，確保實習成果的分享與交流。 \n \n 透過以上操作，期望各學員能夠順利完成本週的實習任務，並將所學知識應用於實際工作中，提升自身技能水平。\\ \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '協同產品設計實習第十二週實習操作 \n 任務目標： \n \n 利用 Siemens NX 1872 繪製鋼球平衡台所需的零組件。 \n 將各分組倉儲設為評分倉儲的子模組。 \n 跨網路操控模擬場景裝置。 \n \n 操作步驟： \n \n \n 零組件繪圖： \n \n 利用 Siemens NX 1872 繪製鋼球平衡台所需的零組件。 \n 按照課程提供的參考資料和影片教學，進行零組件的草稿設計、特徵建立等操作。 \n \n \n \n 設定評分倉儲子模組： \n \n 根據評分倉儲的指示，將各分組倉儲設定為評分倉儲的子模組。 \n 使用 Git 命令將各分組倉儲添加為評分倉儲的子模組，確保正確的命名和連結。 \n \n \n \n 跨網路操控模擬場景裝置： \n \n 下載並安裝所需的 Python 模組（pyzmq、cbor、keyboard）。 \n 從指定的 GitHub 倉儲中下載球場模擬程式。 \n 使用 CoppeliaSim 4.5.1 rev1 開啟球場模擬場景。 \n 在各球員控制端電腦上，開啟 player.py 並按照指示進行操作，控制模擬場景中的機器人球員進行競技。 \n 確保防火牆允許 ZMQ 網路封包通過指定的 port，以確保控制端與模擬場景的通信順暢。 \n \n \n \n 紀錄與反思： \n \n 在個人的課程網誌中，記錄本週實習操作的過程、遇到的困難及解決方法、學習到的知識和技巧等。 \n 反思本週的實習任務，包括個人表現和團隊合作，並提出改進和建議。 \n \n \n \n 注意事項： \n \n 在操作 NX 1872 繪製零組件時，注意遵循正確的設計流程和標準，確保設計的準確性和可行性。 \n 在設定評分倉儲子模組時，確保命名和連結的一致性，以免出現錯誤。 \n 在跨網路操控模擬場景裝置時，確保網路連接穩定，並按照指示進行操作，以避免意外情況發生。 \n 每位學員應積極參與團隊合作，適時溝通和協調，確保任務順利完成。 \n \n 學習目標： \n \n 提升使用 Siemens NX 1872 繪製零組件的能力。 \n 學會將倉儲設定為評分倉儲的子模組，並理解其意義和作用。 \n 掌握跨網路操控模擬場景裝置的技術，並能夠有效地進行操作和控制。 \n \n 通過本週的實習操作，期望各學員能夠熟練應用所學知識，順利完成任務，並不斷提升自身的專業能力和團隊合作能力。 \n', 'tags': '', 'url': 'w12.html'}, {'title': '協同產品設計實習評分項目', 'text': '基於你提供的內容，這份詳細的大綱可以幫助你建立一個協同產品設計實習評分項目： \n', 'tags': '', 'url': '協同產品設計實習評分項目.html'}, {'title': '課程內容總覽', 'text': '\n \n 課程背景與目標 \n \n 簡介 KMOLab 系列課程，尤其是專注於協同產品設計的實習課程。 \n 強調課程目標，包括培養學生的協同設計能力和應用相關工具的技能。 \n \n \n \n 環境建置與工具介紹 \n \n 詳細介紹可攜式系統的概念和相關工具，如Python、Git、CoppeliaSim等。 \n 提供相關工具的下載連結和安裝指南。 \n \n \n \n 課程指定任務 \n \n 列出各週指定的任務，包括個人和分組任務。 \n 每個任務的目標和要求，以及完成任務所需的相關知識和技能。 \n \n \n \n 課程評分方式 \n \n 評分標準和比重，例如學生每週編寫網誌、每週上課內容摘要與分組報告、分組期中報告和期末報告等。 \n 期中和期末報告的題目和要求，以及評分標準。 \n \n \n \n 參考資料和模擬場景建構 \n \n 提供參考資料的連結，例如GitHub存儲庫和相關規格文件。 \n 詳細說明模擬場景的建構過程，包括從零組件繪製到導入CoppeliaSim的步驟。 \n \n \n \n', 'tags': '', 'url': '課程內容總覽.html'}, {'title': '評分項目', 'text': '\n \n 任務完成度 \n \n 學生完成每週指定任務的程度。 \n 任務的準確性和完整性。 \n \n \n \n 參與度 \n \n 學生在分組任務中的積極參與程度。 \n 學生對課程的主動投入和貢獻。 \n \n \n \n 技能掌握 \n \n 學生掌握課程中所涉及的工具和技術的程度。 \n 學生能否熟練應用所學知識解決問題。 \n \n \n \n 文件撰寫與報告 \n \n 學生所提交的文件和報告的質量和完整性。 \n 文件結構和排版是否清晰，報告內容是否具有說服力。 \n \n \n \n 協作能力 \n \n 學生在分組任務中的團隊合作能力。 \n 學生與同伴之間的溝通和協調能力。 \n \n \n \n 這些評分項目可以根據課程的特點和學生的需求進行調整和修改，以確保評分體系的公平性和有效性。 \n \n \n \n \n', 'tags': '', 'url': '評分項目.html'}, {'title': '期中報告', 'text': '41023239楊祐銘 協同產品設計 期中統整影片 \n \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': '期中報告.html'}, {'title': 'w17', 'text': '', 'tags': '', 'url': 'w17.html'}, {'title': '項目一', 'text': '', 'tags': '', 'url': '項目一.html'}, {'title': '項目二', 'text': '機器人 (草稿) \n \n (正式) \n \n 機器人本體 \n 輪子 \n 組合後整體', 'tags': '', 'url': '項目二.html'}]};