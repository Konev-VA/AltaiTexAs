import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CreateRequest } from '../HttpHandler';
import './Reg-window.css';

export interface IRegWindowProps {
    isShow: boolean;
}

export function RegWindow(props: IRegWindowProps) {
    const [isShow, setIsShow] = useState<boolean>(props.isShow);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mailError, setMailError] = useState<string | null>(null);
    const [telephoneError, setTelephoneError] = useState<string | null>(null);

    function EmailIsValid(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email);
    }

    function TelephoneIsValid(telephone: string): boolean {
        return /(\8\d{10})|(\+7\d{10})|(\d{11})/.test(telephone);
    }

    return (
        <>
            <Button
                className='button-in-corner'
                onClick={() => {
                    setIsShow(true);
                }}>
                Оставить заявку
            </Button>

            <Modal
                ize="lg"
                ёaria-labelledby="contained-modal-title-vcenter"
                centered
                show={isShow}
                onHide={() => setIsShow(false)}>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="title">
                            <Form.Control
                                type="text"
                                placeholder="Ваше имя"
                                onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="text">
                            <Form.Control
                                as="textarea" rows={4}
                                placeholder="Введите текст заявки"
                                onChange={(e) => setText(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="telephone">
                            <Form.Control
                                type="telephone"
                                placeholder="Телефон"
                                maxLength={11}
                                onChange={(e) => {
                                    if (!TelephoneIsValid(e.target.value))
                                        setTelephoneError('Номер введён некорректно')
                                    else
                                        setTelephoneError(null);

                                    setTelephone(e.target.value)
                                }} />
                            {telephoneError && <a style={{ color: 'red' }}>{telephoneError}</a>}
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="email"
                                onChange={(e) => {
                                    if (!EmailIsValid(e.target.value))
                                        setMailError('Почта введена неверно')
                                    else
                                        setMailError(null)

                                    setEmail(e.target.value)
                                }} />
                            {mailError && <a style={{ color: 'red' }}>{mailError}</a>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setIsShow(false);
                        }}>
                        Отмена
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            console.log('пытаюсь запрос');

                            if (mailError != null || telephoneError != null)
                                return;

                            console.log('Шлю запрос');

                            CreateRequest({
                                Name: title,
                                Description: text,
                                Telephone: telephone,
                                Email: email
                            });

                            setIsShow(false);
                        }}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
