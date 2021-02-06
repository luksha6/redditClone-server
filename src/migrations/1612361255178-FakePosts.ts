import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1612361255178 implements MigrationInterface {

    public async up(_: QueryRunner): Promise<void> {
     /*   await queryRunner.query(`
        insert into post (title, text, "creatorId", "createdAt") values ('Quai des Orfèvres (Jenny Lamour)', 'Una', 1, '2020-06-02T18:19:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Basket Case 3: The Progeny', 'Giorgia', 1, '2020-09-18T07:24:00Z');
insert into post (title, text, "creatorId", "createdAt") values ('Room with a View, A', 'Sarajane', 1, '2020-07-03T20:21:18Z');
insert into post (title, text, "creatorId", "createdAt") values ('Lola', 'Hersh', 1, '2021-01-21T20:04:58Z');
insert into post (title, text, "creatorId", "createdAt") values ('Machete Maidens Unleashed!', 'Lilly', 1, '2020-02-05T21:24:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('For Roseanna (Roseanna''s Grave)', 'Emma', 1, '2020-09-26T16:21:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Goal! The Dream Begins (Goal!)', 'Sibelle', 1, '2020-10-07T22:48:58Z');
insert into post (title, text, "creatorId", "createdAt") values ('Red Angel (Akai tenshi)', 'Shaun', 1, '2020-06-01T09:40:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('Desire Under the Elms', 'Christean', 1, '2020-06-20T11:55:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('One Tough Cop', 'Hieronymus', 1, '2020-10-20T00:27:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('Suspicion', 'Marji', 1, '2020-06-12T18:09:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Triggermen', 'Junina', 1, '2020-04-18T23:52:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Sharktopus vs. Pteracuda', 'Candide', 1, '2020-12-02T11:00:30Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mr Hockey The Gordie Howe Story', 'Fred', 1, '2020-07-30T00:20:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Flight of the Red Balloon (Voyage du ballon rouge, Le)', 'Marne', 1, '2020-09-02T05:46:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Quebrando o Tabu', 'Isiahi', 1, '2020-07-11T20:00:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Frozen Assets', 'Cathi', 1, '2020-07-01T05:36:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Hunt for Red October, The', 'Gale', 1, '2020-09-17T03:06:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Sir Arne''s Treasure', 'Ulises', 1, '2020-02-29T20:58:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Supermensch: The Legend of Shep Gordon', 'Vincenty', 1, '2020-10-15T05:18:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('The Shoe', 'Georgie', 1, '2020-04-17T21:48:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('Woman of Affairs, A', 'Ab', 1, '2020-06-13T07:22:38Z');
insert into post (title, text, "creatorId", "createdAt") values ('3 Days to Kill', 'Genna', 1, '2020-05-01T08:10:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Turn It Up', 'Elnore', 1, '2020-05-22T15:41:43Z');
insert into post (title, text, "creatorId", "createdAt") values ('Scream of Fear (a.k.a. Taste of Fear)', 'Yolanthe', 1, '2021-01-24T14:32:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Hell Without Limits (Lugar sin límites, El)', 'Duffy', 1, '2020-05-28T08:01:43Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ratcatcher', 'Marcelline', 1, '2020-12-23T20:13:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('Death Wish', 'Jeane', 1, '2020-09-05T01:11:38Z');
insert into post (title, text, "creatorId", "createdAt") values ('Whale, The', 'Dalis', 1, '2020-10-24T07:33:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Good Student, The (Mr. Gibb)', 'Auguste', 1, '2020-02-09T07:01:52Z');
insert into post (title, text, "creatorId", "createdAt") values ('Forsaken, The', 'Rayner', 1, '2020-09-30T04:43:51Z');
insert into post (title, text, "creatorId", "createdAt") values ('Acla, The Descent into Floristella (La discesa di Aclà a Floristella)', 'Blithe', 1, '2020-08-13T03:52:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('Beyoncé: Life Is But a Dream', 'Fayina', 1, '2020-11-09T17:18:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Appointment with Death', 'Kirbie', 1, '2020-08-07T20:23:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('Core, The', 'Malena', 1, '2020-04-29T14:30:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chasing Ghosts: Beyond the Arcade ', 'Olvan', 1, '2020-10-23T04:00:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Juice', 'Kandy', 1, '2020-09-04T11:50:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Vicky Donor', 'Moshe', 1, '2020-02-20T08:34:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Flubber', 'Percy', 1, '2020-08-10T20:57:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Crawlspace', 'Hyacinthia', 1, '2020-10-25T13:07:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Heavy Metal 2000', 'Alford', 1, '2020-11-05T02:27:52Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mother, I Love You', 'Lawrence', 1, '2020-12-23T18:06:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Matinee', 'Roosevelt', 1, '2021-01-29T02:21:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Malice N Wonderland', 'Emmeline', 1, '2020-05-20T08:24:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('My Big Fat Greek Wedding', 'Hadley', 1, '2020-09-24T03:13:35Z');
insert into post (title, text, "creatorId", "createdAt") values ('Divide and Conquer (Why We Fight, 3)', 'Kellsie', 1, '2020-10-25T05:40:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Barney''s Great Adventure', 'Lynnette', 1, '2020-03-22T14:14:43Z');
insert into post (title, text, "creatorId", "createdAt") values ('Flakes', 'Lidia', 1, '2020-08-02T18:22:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Stranger than Fiction', 'Abigael', 1, '2020-06-16T05:01:29Z');
insert into post (title, text, "creatorId", "createdAt") values ('Strayed (égarés, Les)', 'Knox', 1, '2020-12-08T03:00:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Once Upon a Honeymoon', 'Greer', 1, '2020-09-30T14:16:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rocky IV', 'Woodie', 1, '2020-09-17T02:52:24Z');
insert into post (title, text, "creatorId", "createdAt") values ('My New Gun', 'Lorrayne', 1, '2020-05-10T16:15:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Vampire Hunter D: Bloodlust (Banpaia hantâ D)', 'Alina', 1, '2020-03-20T18:28:35Z');
insert into post (title, text, "creatorId", "createdAt") values ('Student of Prague, The (a.k.a. Bargain with Satan, A) (Student von Prag, Der)', 'Hermine', 1, '2020-06-05T13:06:24Z');
insert into post (title, text, "creatorId", "createdAt") values ('Future by Design', 'Neila', 1, '2020-12-03T10:05:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Toi et Moi', 'Fair', 1, '2020-04-17T09:49:06Z');
insert into post (title, text, "creatorId", "createdAt") values ('To Live (Huozhe)', 'Obadiah', 1, '2020-08-18T20:36:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Net 2.0, The ', 'Sherri', 1, '2020-02-12T04:15:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Nine Lives of Fritz the Cat, The', 'Jefferson', 1, '2020-04-15T12:38:24Z');
insert into post (title, text, "creatorId", "createdAt") values ('Popular Music (Populärmusik från Vittula)', 'Missie', 1, '2020-11-13T10:10:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Kika', 'Leann', 1, '2020-11-28T21:45:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Deadly Trap, The (La maison sous les arbres)', 'Katine', 1, '2020-09-26T05:14:53Z');
insert into post (title, text, "creatorId", "createdAt") values ('Gia', 'Matthias', 1, '2020-09-26T00:37:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('Billy Jack', 'Pablo', 1, '2020-09-27T06:44:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Fires on the Plain (Nobi)', 'Sibeal', 1, '2020-09-11T23:11:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Full Moon in Paris (Les nuits de la pleine lune)', 'Gale', 1, '2021-01-26T21:00:29Z');
insert into post (title, text, "creatorId", "createdAt") values ('Charlie Chan at the Wax Museum', 'Demetris', 1, '2020-10-15T21:26:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Soldier''s Plaything, A', 'Valle', 1, '2020-10-17T14:07:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('3 on a Couch (Three on a Couch)', 'Elyssa', 1, '2021-01-22T04:13:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Hanging Up', 'Aylmar', 1, '2020-12-31T22:05:46Z');
insert into post (title, text, "creatorId", "createdAt") values ('I, Monster', 'Rosco', 1, '2020-06-06T11:10:42Z');
insert into post (title, text, "creatorId", "createdAt") values ('Transamerica', 'Sula', 1, '2020-09-27T04:19:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Last Year at Marienbad (L''Année dernière à Marienbad)', 'Trumann', 1, '2020-02-17T01:15:06Z');
insert into post (title, text, "creatorId", "createdAt") values ('Bridge of San Luis Rey, The', 'Valentino', 1, '2020-05-29T12:27:19Z');
insert into post (title, text, "creatorId", "createdAt") values ('Harder They Fall, The', 'Reggie', 1, '2020-11-19T08:35:24Z');
insert into post (title, text, "creatorId", "createdAt") values ('Let It Be', 'Violetta', 1, '2020-04-15T17:52:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Dernier Combat, Le (Last Battle, The)', 'Brandice', 1, '2020-10-24T03:24:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('12:01', 'Foster', 1, '2020-02-14T12:23:28Z');
insert into post (title, text, "creatorId", "createdAt") values ('Jumbo (Billy Rose''s Jumbo)', 'Annabel', 1, '2020-02-12T21:01:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Son of Paleface', 'Jody', 1, '2020-02-13T13:36:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Brother Minister: The Assassination of Malcolm X', 'Cherianne', 1, '2020-11-14T01:27:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('Top Floor Left Wing (Dernier étage gauche gauche)', 'Hallie', 1, '2020-07-19T13:47:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('Corpo Celeste', 'Lexie', 1, '2020-04-21T03:52:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Visit to a Small Planet', 'Lucias', 1, '2021-01-04T07:56:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('You and Me', 'Evania', 1, '2020-06-03T00:47:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Osmosis (Osmose)', 'Goldia', 1, '2020-08-20T20:11:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mars Attacks!', 'Aguistin', 1, '2020-04-10T14:05:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('I Love You Again', 'Derwin', 1, '2020-02-11T11:29:56Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chromophobia', 'Jacklin', 1, '2020-05-18T20:22:53Z');
insert into post (title, text, "creatorId", "createdAt") values ('Batman: The Dark Knight Returns, Part 2', 'Bondon', 1, '2020-12-16T08:43:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Blue Vinyl', 'Marguerite', 1, '2020-07-23T22:28:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('House IV', 'Nerita', 1, '2020-09-04T02:52:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Numbskull Emptybrook (Uuno Turhapuro)', 'Michale', 1, '2020-09-19T03:30:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('I Was A Communist for the FBI', 'Bernelle', 1, '2020-08-02T16:17:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Glass Bottom Boat, The', 'Nicoline', 1, '2020-07-02T17:42:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Town Called Panic, A (Panique au village)', 'Jacquenetta', 1, '2020-12-02T11:05:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('Killing Machine, The (Icarus)', 'Sallyann', 1, '2020-02-19T04:05:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Trail of the Pink Panther', 'Jamie', 1, '2020-05-06T22:07:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('Great Gatsby, The', 'Dick', 1, '2020-04-23T22:18:46Z');
        `); */
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
