import React, { useEffect, useState } from "react";
import "./Contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        tel: "",
    });

    // 이메일 유효성 검사 함수
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // 입력값 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            const cleanValue = value.replace(/[^a-zA-Zㄱ-ㅎ가-힣\s]/g, ""); // 한글/영문만 허용
            setFormData((prevData) => ({
                ...prevData,
                [name]: cleanValue,
            }));
        } else if (name === "tel") {
            const cleanValue = value.replace(/\D/g, ""); // 숫자만 허용
            const formattedValue = formatPhoneNumber(cleanValue); // 포맷 적용
            setFormData((prevData) => ({
                ...prevData,
                tel: formattedValue,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // 전화번호 포맷 함수
    const formatPhoneNumber = (tel) => {
        if (tel.startsWith("02")) {
            if (tel.length <= 2) return tel; // '02'
            if (tel.length <= 5) return `${tel.slice(0, 2)}-${tel.slice(2)}`; // '02-000'
            if (tel.length <= 9)
                return `${tel.slice(0, 2)}-${tel.slice(2, 5)}-${tel.slice(5)}`; // '02-000-0000'
            return `${tel.slice(0, 2)}-${tel.slice(2, 6)}-${tel.slice(6)}`; // '02-0000-0000'
        }
        if (tel.startsWith("010")) {
            if (tel.length <= 3) return tel; // '010'
            if (tel.length <= 7) return `${tel.slice(0, 3)}-${tel.slice(3)}`; // '010-0000'
            return `${tel.slice(0, 3)}-${tel.slice(3, 7)}-${tel.slice(7)}`; // '010-0000-0000'
        }
        if (tel.length === 10) {
            if (tel.length <= 3) return tel; // '000'
            if (tel.length <= 6) return `${tel.slice(0, 3)}-${tel.slice(3)}`; // '000-000'
            return `${tel.slice(0, 3)}-${tel.slice(3, 6)}-${tel.slice(6)}`; // '000-000-0000'
        }
        return tel; // 기본 반환
    };

    // 유효성 검사 (포커스 해제 시)
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = "";

        if (name === "email" && !validateEmail(value)) {
            error = "유효하지 않은 이메일입니다.";
        } else if (name === "tel") {
            const cleanTel = value.replace(/\D/g, ""); // 숫자만 추출
            if (cleanTel.length < 9 || cleanTel.length > 11) {
                error = "유효하지 않은 전화번호입니다.";
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    return (
        <section className="contact-container">
            <article>
                <h1>CONTACT</h1>
            </article>

            <article>
                <h2>BASIC INFORMATION</h2>
                <form className="contact-form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름"
                            id="name"
                            autoComplete="off"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="이메일"
                            id="email"
                            autoComplete="off"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && (
                        <p className="error-message">{errors.email}</p>
                    )}

                    <div>
                        <label htmlFor="tel">Tel</label>
                        <input
                            type="text"
                            name="tel"
                            placeholder="전화번호"
                            id="tel"
                            autoComplete="off"
                            value={formData.tel}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.tel && (
                        <p className="error-message">{errors.tel}</p>
                    )}
                </form>
            </article>

            <article>
                <h2>MESSAGE</h2>
                <div>
                    <textarea placeholder="문의 내용을 입력하세요"></textarea>
                </div>
            </article>

            <article>
                <h2>AGREEMENT</h2>
                <div>
                    <label>
                        <input type="checkbox" />
                        개인정보 수집 및 이용에 동의합니다.
                    </label>
                </div>
            </article>

            <article>
                <div>
                    <button>
                        Send
                    </button>
                </div>
            </article>
        </section>
    );
};

export default Contact;
