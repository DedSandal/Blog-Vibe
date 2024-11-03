import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { blogsData, fileEditorConfig } from '../../constants';
import { AddPostContainer } from './styles';

const AddPost = () => {
    // State hooks to manage input data
    const [imageUrl, setImageUrl] = useState('');
    const [formState, setFormState] = useState({ title: '', content: '' });

    // Handle input changes
    const handleImageUrlChange = (event) => setImageUrl(event.target.value);
    const handleTitleChange = (event) => setFormState({ ...formState, title: event.target.value });
    const handleEditorChange = (content) => setFormState({ ...formState, content });

    // Save data to localStorage
    const handleSave = () => {
        const postData = {
            id: Date.now(),
            img: imageUrl,
            title: formState.title,
            content: formState.content,
        };

        // Save post data to localStorage
        const savedPosts = JSON.parse(localStorage.getItem('blogs')) || blogsData;
        savedPosts.push(postData);
        localStorage.setItem('blogs', JSON.stringify(savedPosts));

        // Clear input fields
        setImageUrl('');
        setFormState({ title: '', content: '' });
    };

    return (
        <AddPostContainer>
            <h4>Add Post</h4>
            <div className="form-wrapper">
                <div className="inputs-wrapper">
                    <Input type="text" placeholder="Image url" value={imageUrl} onChange={handleImageUrlChange} />
                    <Input type="text" placeholder="Title" value={formState.title} onChange={handleTitleChange} />
                </div>
                <div className="background-img">{imageUrl && <img src={imageUrl} alt="User provided" />}</div>
                <div className="editor-wrapper">
                    <Editor
                        apiKey="jzrhm2oom536cjib2vjpjkrq36exqy92vm4puyl9fo9tdw37"
                        data-testid="editor"
                        init={{
                            height: 400,
                            menubar: true,
                            resize: false,
                            placeholder: 'Enter your content here...',
                            plugins: fileEditorConfig.plugins.join(' '),
                            toolbar: fileEditorConfig.toolbar.join(' | '),
                            content_style:
                                '@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap"); body { font-family:Rubik; font-size:14px }',
                            font_family_formats: Object.entries(fileEditorConfig.fonts)
                                .map((entry) => entry.join('='))
                                .join('; '),
                        }}
                        onEditorChange={handleEditorChange}
                        value={formState.content}
                    />
                </div>
            </div>
            <Button onClick={handleSave}>Save</Button>
        </AddPostContainer>
    );
};

export default AddPost;
