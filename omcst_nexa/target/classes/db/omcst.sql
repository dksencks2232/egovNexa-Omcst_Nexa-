
/* Drop Triggers */

DROP TRIGGER TRI_SITE_SEQ;



/* Drop Sequences */

DROP SEQUENCE SEQ_SITE_SEQ;




/* Create Sequences */

CREATE SEQUENCE SEQ_SITE_SEQ INCREMENT BY 1 START WITH 1;



/* Create Triggers */

CREATE OR REPLACE TRIGGER TRI_SITE_SEQ BEFORE INSERT ON SITE
FOR EACH ROW
BEGIN
	SELECT SEQ_SITE_SEQ.nextval
	INTO :new.SEQ
	FROM dual;
END;

/




