--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    region character varying NOT NULL,
    city character varying NOT NULL,
    "localtime" date NOT NULL,
    country character varying NOT NULL,
    temperature double precision NOT NULL,
    weather character varying NOT NULL,
    icon character varying NOT NULL,
    humidity integer NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: bank_recipient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Users" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bank_recipient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.request (
    req_id integer NOT NULL,
    user_id integer NOT NULL,
    date date,
    source character varying NOT NULL,
    destination character varying NOT NULL
);


ALTER TABLE public.request OWNER TO postgres;

--
-- Name: request_req_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.request ALTER COLUMN req_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.request_req_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.travel (
    travel_id integer NOT NULL,
    admin_id integer NOT NULL,
    source character varying NOT NULL,
    destination character varying NOT NULL,
    cost integer NOT NULL,
    passengers_id integer[],
    type character varying,
    size integer DEFAULT 100 NOT NULL,
    date date DEFAULT CURRENT_DATE
);


ALTER TABLE public.travel OWNER TO postgres;

--
-- Name: travel_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.travel ALTER COLUMN travel_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.travel_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    birthday date,
    city character varying,
    role character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, "createdAt", "updatedAt", region, city, "localtime", country, temperature, weather, icon, humidity) FROM stdin;
\.


--
-- Data for Name: request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.request (req_id, user_id, date, source, destination) FROM stdin;
1	5	\N	mashhad	tehran
\.


--
-- Data for Name: travel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.travel (travel_id, admin_id, source, destination, cost, passengers_id, type, size, date) FROM stdin;
4	4	mashhad	LA	100	\N	train	100	2022-02-17
6	4	mashhad	LA	100	\N	train	100	2022-02-17
7	4	edit source	edit des	2300	{2}	train	100	2022-02-17
10	4	mashhad	LA	100	\N	train	100	2022-02-17
11	4	mashhad	kakhk	9900	{2,5}	plain	100	2022-02-17
13	7	edit mabda	edit des	2501	\N	\N	100	2022-02-17
15	7	mashhad	toroq	850	\N	\N	20	2022-02-17
16	7	mashhad	toroq	850	\N	\N	20	\N
17	7	mashhad	toroq	850	\N	\N	20	\N
18	7	mashhad	toroq	850	\N	train	20	2022-05-22
19	7	invar	oonvar	100	\N	plain	25	2022-05-22
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, birthday, city, role) FROM stdin;
2	user1	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	user
1	test1	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	user
3	user2	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	user
4	admin1	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	admin
5	moein	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	user
6	newadmin1	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	admin
7	newadmin2	$2a$10$ejceehrwm4/fVuxayGiq3e059x/UMMxvJ1vKzI.E25MfruZho.tUS	\N	\N	admin
\.


--
-- Name: bank_recipient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bank_recipient_id_seq', 1, false);


--
-- Name: request_req_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.request_req_id_seq', 1, true);


--
-- Name: travel_travel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.travel_travel_id_seq', 19, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: Users bank_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT bank_pkey PRIMARY KEY (id);


--
-- Name: request request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_pkey PRIMARY KEY (req_id);


--
-- Name: travel travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT travel_pkey PRIMARY KEY (travel_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: travel admin_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT admin_id FOREIGN KEY (admin_id) REFERENCES public.users(id) NOT VALID;


--
-- Name: request user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

