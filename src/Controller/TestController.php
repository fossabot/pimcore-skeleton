<?php

declare(strict_types=1);

namespace App\Controller;

use DateTime;
use Pimcore\Version;
use Pimcore\Model\DataObject\Blog;
use Pimcore\Model\DataObject\Post;
use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends FrontendController
{
    #[Route('/blog', name: 'blog_list')]
    public function blogListAction(): Response
    {
        $blogs = new Blog\Listing();
        $b = null;
        $a = $c;

            // This is a comment

        return $this->render('blog/list.html.twig', [
            'version' => Version::getVersion(),
            'blogs' => $blogs->getObjects(),
            'formatDate' => [$this, 'formatDate'],
        ]);
    }
}
