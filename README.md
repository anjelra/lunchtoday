# 프로젝트 목적
회사 대리님과 '점심 뭐먹지'에 대한 논의를 매일 하다보니 룰렛을 돌려서 그 날의 메뉴를 정하자는 이야기가 나와서
요새 핫한 vue.js 를 이용해서 프로젝트를 만들어 보기로 함.

# 프로젝트 사용 기술
vue, mysql, node.js, express, vuex

# snapshot


# 프로젝트 기술 블로그
<https://app.gitbook.com/@puppy912000/s/todaylunch-project/>

# 프로젝트 셋팅

## db 
    $ mysql -uroot -p
    비밀번호 입력(1720)

    $ use lunchmenu;
    $ CREATE TABLE lunchmenu.MENU_LIST (
        group_id int,
        menu_id int,
        menu_name varchar(255),
        hide_yn varchar(255) default('N'),
        PRIMARY KEY(menu_id)
    );

    user권한 설정
    $ CREATE USER 'root'@'localhost' IDENTIFIED BY '1720';
    $ FLUSH PRIVILEGES;

    database에 user 권한 부여
    $ GRANT ALL PRIVILEGES ON lunchmenu TO 'root'@'localhost';
    $ FLUSH PRIVILEGES;

## 빌드
    $ npm run build

## 서버 켜기
    $ cd backend 
    $ node app

# commit 이 한번에 이뤄진 이유
프로젝트 진행 당시에 대리님 깃허브를 이용해 작업을 했고, 작업이 어느정도 진행된 후에 clone을 이용하여
새로운 프로젝트를 만들었기 떄문이다.


